export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface TimelineData {
  title: string;
  subtitle: string;
  description: string;
  events: TimelineEvent[];
}

export const timelines: TimelineData[] = [
  {
    title: "Working Process of Fest",
    subtitle: "Working Process",
    description:
      "Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the fest.",
    events: [
      {
        date: "1-6 May, 2021",
        title: "Registration",
        description:
          "Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)",
      },
      {
        date: "6-9 May, 2021",
        title: "Participation",
        description:
          "Participate online. The links for your registered events will be sent to you via email and whatsapp groups. Use those links and show your talent.",
      },
      {
        date: "10 May, 2021",
        title: "Result Declaration",
        description:
          "The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will be announced on the whatsapp groups and will be mailed to you.",
      },
      {
        date: "12 May, 2021",
        title: "Prize Distribution",
        description:
          "The winners will be contacted by our team for their addresses and the winning goodies will be sent at their addresses.",
      },
    ],
  },
  {
    title: "Xend Finance Roadmap",
    subtitle: "Roadmap",
    description:
      "Discover the roadmap of Xend Finance as we revolutionize finance with cryptocurrency-backed real world assets.",
    events: [
      {
        date: "Q1 2024",
        title: "Launch RWA Token",
        description:
          "Introduction of the Real World Asset (RWA) token to enable investment in real-world assets like stock and real estate.",
      },
      {
        date: "Q2 2024",
        title: "Expand Xend Solutions Line",
        description:
          "Expansion of Xend Solutions Line to provide a comprehensive suite of DeFi services.",
      },
      {
        date: "Q3 2024",
        title: "Integrate XEND-AI",
        description:
          "Integration of XEND-AI for real-time AI assistance in making smart investment decisions.",
      },
      {
        date: "Q4 2024",
        title: "Global Expansion",
        description:
          "Unrestricted membership and global expansion to offer our services to a worldwide audience.",
      },
    ],
  },
];
