"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiDownload } from "react-icons/fi";
import { FaAndroid, FaApple, FaFileDownload, FaRobot } from "react-icons/fa";
import { useState } from "react";
import ShineBorder from "../magicui/shine-border";

interface SpringModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ModalButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <ShineBorder
          className="text-center text-sm font-bold capitalize md:text-lg"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          Download
        </ShineBorder>
      </div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const SpringModal: React.FC<SpringModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-slate-900 p-6 text-white shadow-xl"
          >
            <FiAlertCircle className="absolute -left-24 -top-24 z-0 rotate-12 text-[250px] text-white/10" />
            <div className="relative z-10">
              <div className="mx-auto mb-2 grid h-16 w-16 place-items-center rounded-full bg-white text-3xl text-indigo-600">
                <FiAlertCircle />
              </div>
              <h3 className="mb-2 text-center text-3xl font-bold">
                Download for Android and iOS
              </h3>
              <p className="mb-6 text-center">
                Choose your platform to download the app.
              </p>
              <div className="flex flex-row items-center justify-between gap-2">
                {/* <div
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded bg-transparent py-2 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <FaAndroid />
                  Android
                </div> */}
                <div>
                  <ShineBorder
                    className="m flex flex-row text-center text-sm font-bold  capitalize text-cyan-600"
                    color={["#3DDC84", "#FFFFFF", "#78C257"]}
                  >
                    <div className="flex flex-row gap-2">
                      <FaAndroid />
                      Android
                    </div>
                  </ShineBorder>
                </div>

                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded bg-transparent py-2 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <FaApple />
                  iOS
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded bg-transparent py-2 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <FaFileDownload />
                  APK
                </button> */}
                <div>
                  <ShineBorder
                    className="m flex flex-row text-center text-sm font-bold capitalize text-gray-800"
                    color={["#000000", "#FFFFFF"]}
                  >
                    <div className="flex flex-row gap-2">
                      <FaApple />
                      iOS
                    </div>
                  </ShineBorder>
                </div>
                <div>
                  <ShineBorder
                    className="m flex flex-row text-center text-sm font-bold capitalize text-green-600"
                    color={["#3DDC84", "#FFFFFF", "#007D34"]}
                  >
                    <div className="flex flex-row gap-2">
                      <FaRobot />
                      APK
                    </div>
                  </ShineBorder>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalButton;
