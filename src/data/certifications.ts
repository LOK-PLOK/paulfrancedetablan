import type { Certification } from "./types";

// `id` is also the filename stem: logos/<id>.(svg|png|webp) and documents/<id>.pdf
export const certifications: Certification[] = [
  { id: "cisco-intro-cybersecurity", title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy / University of San Carlos", date: "May 2024" },
  { id: "topcit-level-2", title: "TOPCIT — Level 2", issuer: "Test of Practical Competency in ICT", date: "June 2025" },
  { id: "cisco-cybersecurity-essentials", title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy / University of San Carlos", date: "December 2025" },
  { id: "philnits-fe", title: "Fundamental Information Technology Engineers Certification (PhilNITS)", issuer: "PhilNITS", date: "April 2026" },
  { id: "paessler-monitoring-professional", title: "Paessler Monitoring Professional", issuer: "Paessler LLC", date: "August 2026" },
  { id: "tcpip-analysis-wireshark", title: "TCP/IP Analysis With Wireshark", issuer: "Leutert NetServices", date: "October 2026" },
  { id: "powershell-scripting-essentials", title: "PowerShell Scripting Essentials", issuer: "IT-Schulungen.com", date: "October 2026" },
];
