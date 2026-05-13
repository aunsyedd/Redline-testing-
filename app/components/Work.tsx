// "use client";
// import { useState } from "react";

// const projects = [
//   { tag: "CGI", title: "Komila Cafe", hue: "20,10,10" },
//   { tag: "F&B", title: "Coffee Cup", hue: "10,15,10" },
//   { tag: "FITNESS", title: "Jeddah Yacht Club", hue: "10,10,20" },
//   { tag: "PRODUCT", title: "Product spin", hue: "15,10,10" },
//   { tag: "F&B", title: "Chef Station", hue: "10,12,10" },
//   { tag: "VFX", title: "Green screen", hue: "10,15,15" },
// ];

// export default function SelectedWork() {
//   const [hovered, setHovered] = useState<number | null>(null);

//   return (
//     <section
//       id="selected work"
//       style={{
//         padding: "100px 40px",
//         maxWidth: 1100,
//         margin: "0 auto",
//       }}
//     >
//       <div
//         style={{
//           fontSize: 11,
//           letterSpacing: "0.2em",
//           textTransform: "uppercase",
//           color: "#e53232",
//           marginBottom: 16,
//           fontWeight: 600,
//         }}
//       >
//         Selected Work
//       </div>
//       <h2
//         className="font-display"
//         style={{ fontSize: "clamp(40px, 5vw, 60px)", marginBottom: 48, color: "#f0f0f0" }}
//       >
//         Recent projects.
//       </h2>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: 3,
//         }}
//       >
//         {projects.map((p, i) => (
//           <div
//             key={i}
//             onMouseEnter={() => setHovered(i)}
//             onMouseLeave={() => setHovered(null)}
//             style={{
//               aspectRatio: "4/3",
//               background: `rgb(${p.hue})`,
//               border: "1px solid #1e1e1e",
//               position: "relative",
//               overflow: "hidden",
//               cursor: "pointer",
//               transition: "transform 0.3s ease",
//               transform: hovered === i ? "scale(1.02)" : "scale(1)",
//             }}
//           >
//             {/* Gradient overlay */}
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 background: `linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%)`,
//               }}
//             />
//             {/* Red tint on hover */}
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 background: "rgba(229,50,50,0.08)",
//                 opacity: hovered === i ? 1 : 0,
//                 transition: "opacity 0.3s",
//               }}
//             />
//             {/* Grid texture */}
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 backgroundImage:
//                   "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
//                 backgroundSize: "40px 40px",
//               }}
//             />
//             {/* Tag + title */}
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: 16,
//                 left: 16,
//               }}
//             >
//               <div
//                 style={{
//                   fontSize: 9,
//                   letterSpacing: "0.2em",
//                   textTransform: "uppercase",
//                   color: "#e53232",
//                   marginBottom: 4,
//                   fontWeight: 600,
//                 }}
//               >
//                 {p.tag}
//               </div>
//               <div
//                 style={{
//                   fontSize: 13,
//                   color: "#ddd",
//                   fontWeight: 500,
//                 }}
//               >
//                 {p.title}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
