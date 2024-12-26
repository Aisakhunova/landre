import React, { useState } from "react";

const faqData = [
  {
    question: "Who are you and who stands behind this VPN service?",
    answer: "",
  },
  {
    question: "What is V2Ray and why should I use it?",
    answer:
      "V2Ray is an open-source network proxy tool designed to enhance internet privacy, security, and bypass censorship. It encrypts and obfuscates internet traffic to make it harder for censorship systems to detect or block, and offers advanced routing, load balancing, and flexible configuration options. It is commonly used in restrictive regions to evade surveillance and access restricted content. By turning V2Ray VPN on your device you will bypass the restrictions and easily access the resources you need to (Instagram, YouTube, etc.).",
  },
  {
    question: "What is the difference between VLESS and other VPN protocols?",
    answer: "",
  },
  {
    question: "What devices can I use VLESS VPN on?",
    answer: "",
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
