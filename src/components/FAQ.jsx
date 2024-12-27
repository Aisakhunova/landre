import React, { useState } from "react";

const faqData = [
  {
    question: "Who are you and who stands behind this VPN service?",
    answer: 
      "At Wraith VPN we're a passionate team of tech enthusiasts and privacy advocates dedicated to helping you achieve online freedom and security regardless of any restrictions possible. Our team consists of professionals from diverse backgrounds, including cybersecurity, software development, and customer service, all committed to providing you with the best possible VPN experience. We are highly experienced web users facing restrictions every day. Using other VPN and proxy services which give our sensitive data away, we decided to develop our own product which will push your user experience to the moon",
  },
  {
    question: "What is V2Ray and why should I use it?",
    answer:
      "V2Ray is an open-source network proxy tool designed to enhance internet privacy, security, and bypass censorship. It encrypts and obfuscates internet traffic to make it harder for censorship systems to detect or block, and offers advanced routing, load balancing, and flexible configuration options. It is commonly used in restrictive regions to evade surveillance and access restricted content. By turning V2Ray VPN on your device you will bypass the restrictions and easily access the resources you need to (Instagram, YouTube, etc.).",
  },
  {
    question: "Is my data safe with VLESS VPN?",
    answer: 
      "Yes! VLESS encrypts your internet traffic, ensuring that your browsing, online activity, and personal data remain private. Additionally, it helps protect against man-in-the-middle attacks.",
  },
  {
    question: "What is the difference between VLESS and other VPN protocols?",
    answer: 
      "VLESS is more efficient than older protocols like other V2Ray protocols, offering improved performance and better resistance to censorship. It's designed for a more lightweight and secure connection."
  },
  {
    question: "What devices can I use VLESS VPN on?",
    answer: "VLESS VPN can be used on multiple devices, including:\n\n\nWindows (via V2Ray or XRay clients)\nMacOS (via V2Ray, V2Box or XRay clients)\nAndroid (via V2RayNG or similar apps)\niOS (via Shadowrocket, Streisand, V2Box or similar apps)",
  },
  {
    question: "How do I buy a subscription?",
    answer: "",
  },
  {
    question: "What payment methods do you accept?",
    answer: "",
  },
  {
    question: "How can I contact support?",
    answer: "",
  },
  {
    question: "Do you offer a free trial?",
    answer: "",
  },
  {
    question: "Is my data safe with VLESS VPN?",
    answer: "",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-items">
        {faqData.map((item, index) => (
            
          <div
            key={index}
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div className="divider"></div>
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className="faq-icon">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M11.0001 0H14.0001V25H11.0001V0Z" fill="#17FFB2"/>
 <path d="M25 11.0001V14.0001L0 14.0001L1.31134e-07 11.0001L25 11.0001Z" fill="#17FFB2"/>
 </svg>
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )} 
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
