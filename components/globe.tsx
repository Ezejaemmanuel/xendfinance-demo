"use client";
import React, {
  useState,
  useRef,
  useEffect,
  FunctionComponent,
  useCallback,
} from "react";
import Globe from "react-globe.gl";
import countries from "@/components/files/global.min.json";
import { Color, MeshPhongMaterial, SpotLight } from "three";
import states from "@/components/files/cities";

interface WorldProps {
  siblingWidth?: number;
  siblingHeight?: number;
}
interface State {
  state: string;
  latitude: number;
  longitude: number;
}

interface arcsData {
  filter?: any;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
}

interface ringData {
  lat: number;
  lng: number;
}

const World: FunctionComponent<WorldProps> = ({
  siblingWidth,
  siblingHeight,
}) => {
  const [arcsData, setArcsData] = useState<arcsData[]>([]);
  const [ringsData, setRingsData] = useState<ringData[]>([]);
  const [count, setCount] = useState(0);
  const [worldCities] = useState<State[]>(states);
  const globeEl = useRef<any>();

  const ARC_REL_LEN = 0.5; // relative to whole arc
  const FLIGHT_TIME = 2000;
  const NUM_RINGS = 4;
  const RINGS_MAX_R = 10; // deg
  const RING_PROPAGATION_SPEED = 5; // deg/sec

  const emitArc = () => {
    // random lat/lng
    const min = Math.ceil(1);
    const max = Math.floor(50);
    const random1 = Math.floor(Math.random() * (max - min) + min);
    const random2 = Math.floor(Math.random() * (max - min) + min);

    const startLat = worldCities[random1].latitude;
    const startLng = worldCities[random1].longitude;
    const endLat = worldCities[random2].latitude;
    const endLng = worldCities[random2].longitude;

    // add and remove arc after 1 cycle
    const arc = { startLat, startLng, endLat, endLng };
    setArcsData((arcsData: arcsData[]) => [...arcsData, arc]);
    setTimeout(
      () =>
        setArcsData((arcsData: arcsData[]) =>
          arcsData.filter((d: arcsData) => d !== arc)
        ),
      FLIGHT_TIME * 2
    );

    // add and remove start rings
    const srcRing = { lat: startLat, lng: startLng };
    setRingsData((ringsData: ringData[]) => [...ringsData, srcRing]);
    setTimeout(
      () =>
        setRingsData((ringsData: ringData[]) =>
          ringsData.filter((r: ringData) => r !== srcRing)
        ),
      FLIGHT_TIME * ARC_REL_LEN
    );

    // add and remove target rings
    setTimeout(() => {
      const targetRing = { lat: endLat, lng: endLng };
      setRingsData((ringsData: ringData[]) => [...ringsData, targetRing]);
      setTimeout(
        () =>
          setRingsData((ringsData: ringData[]) =>
            ringsData.filter((r: ringData) => r !== targetRing)
          ),
        FLIGHT_TIME * ARC_REL_LEN
      );
    }, FLIGHT_TIME);
    // trigger useEffect
    setCount(count + 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      emitArc();
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [count]);

  // globe inital color
  const globeMaterial = new MeshPhongMaterial();
  globeMaterial.color = new Color("#4064FD");
  globeMaterial.opacity = 0.5;
  globeMaterial.transparent = true;

  useEffect(() => {
    setTimeout(() => {
      const directionalLight = globeEl.current
        .scene()
        .children.find(
          (obj3d: { type: string }) => obj3d.type === "DirectionalLight"
        );
      directionalLight && directionalLight.position.set(0, 0, 0);
    });
    const globe = globeEl.current;

    // orbitControls
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 1;
    globe.controls().enableZoom = false;
    globe.controls().minPolarAngle = 1;
    globe.controls().maxPolarAngle = 2;

    // light & camera
    const camera = globeEl.current.camera();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    const aLight = new SpotLight(0xffffff, 0);
    aLight.position.set(75, 500, 0);
    camera.add(aLight);

    globe.scene().add(camera);
  }, []);
  return (
    <Globe
      height={siblingHeight}
      width={siblingWidth}
      backgroundColor="rgba(0,0,0,0)"
      ref={useCallback<any>(globeEl, [])}
      globeMaterial={useCallback<any>(globeMaterial, [])}
      //@ts-ignore
      hexPolygonsData={useCallback<any>(countries.features, [])}
      hexPolygonResolution={3}
      hexPolygonMargin={0.7}
      hexPolygonColor={useCallback(() => "rgba(255,255,255,1)", [])}
      showAtmosphere={false}
      atmosphereColor={useCallback<any>("#3a228a", [])}
      arcsData={arcsData}
      arcColor={() => "#D39F49"}
      arcStroke={0.6}
      arcDashLength={ARC_REL_LEN}
      arcDashGap={2}
      arcDashInitialGap={1}
      arcDashAnimateTime={FLIGHT_TIME}
      arcsTransitionDuration={0}
      ringsData={ringsData}
      ringColor={() => "#D39F49"}
      ringResolution={1000}
      ringMaxRadius={RINGS_MAX_R}
      ringPropagationSpeed={RING_PROPAGATION_SPEED}
      ringRepeatPeriod={(FLIGHT_TIME * ARC_REL_LEN) / NUM_RINGS}
    />
  );
};

export default World;
