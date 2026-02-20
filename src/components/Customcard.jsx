// import React from "react";

// export default function FruitCards() {
//   const cards = [
//     {
//       title: "Fresh Lime",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tincidunt est at scelerisque.",
//       img: "https://i.imgur.com/Q9BGTuy.png",
//       gradient: "from-yellow-400 to-yellow-500",
//       iconColor: "text-yellow-500",
//     },
//     {
//       title: "Healthy Peach",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tincidunt est at scelerisque.",
//       img: "https://i.imgur.com/qN7GJ0M.png",
//       gradient: "from-orange-400 to-red-500",
//       iconColor: "text-orange-500",
//     },
//     {
//       title: "Organic Kiwi",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tincidunt est at scelerisque.",
//       img: "https://i.imgur.com/Tm9KZyK.png",
//       gradient: "from-lime-400 to-green-500",
//       iconColor: "text-green-500",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#FFF6E5] flex items-center justify-center p-6">
//       <div className="flex gap-8">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="w-[260px] bg-white rounded-[28px] shadow-xl overflow-hidden"
//           >
//             {/* Top Image Section */}
//             <div className="h-[220px] flex items-center justify-center relative">
//               <span className={`absolute top-5 left-5 text-xl ${card.iconColor}`}>
//                 ☰
//               </span>
//               <span className={`absolute top-5 right-5 ${card.iconColor}`}>
//                 🔍
//               </span>
//               <img src={card.img} alt={card.title} className="w-[170px]" />
//             </div>

//             {/* Bottom Content */}
//             <div
//               className={`p-5 text-white bg-gradient-to-br ${card.gradient} rounded-b-[28px]`}
//             >
//               <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
//               <p className="text-sm opacity-90 mb-4">{card.desc}</p>
//               <button className="w-full bg-white text-black font-semibold py-2 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition">
//                 🛒 Add to cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


