"use client"
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";

const Navbar = () => { 
    const router = useRouter()
    
    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            {/* Logo */}
            <h1 className="text-3xl" onClick={() => router.push("/")}> 
                Luz<span className="font-bold">&</span>Aroma 
            </h1>

            {/* Menu Desktop */}
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>

            {/* Menu Mobile */}
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>

            {/* Icons */}
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart  
                    strokeWidth={1} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/cart")}
                />
            
                <Heart 
                    strokeWidth={1} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/love-products")}
                />

                <User 
                    strokeWidth={1} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/profile")}
                />
            </div>
        </div>
    );
}

export default Navbar;