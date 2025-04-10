import React from 'react'
import kidCategory from "../assets/Images-main/kid.png"
import WomenCategory from "../assets/Images-main/woman.png"
import MenCategory from "../assets/Images-main/man.png"

const CategorySection = () => {
    const categories = [
        {
            title: "Men",
            ImageUrl: MenCategory, 
        },
        {
            title: "Women",
            ImageUrl: WomenCategory,
        },
        {
            title: "Kids",
            ImageUrl: kidCategory,
        },

    ]
  return (
    <div className="container mx-auto py-8 px-4">
    <h2 className="text-2xl font-bold text-center mb-6">Shop by Categories</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <img 
                    src={item.ImageUrl} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blend-saturation bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xl font-semibold">{item.title}</p>
                    <button className="mt-2 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">View All</button>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default CategorySection