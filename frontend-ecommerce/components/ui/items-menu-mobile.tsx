import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Menu } from "lucide-react";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu></Menu>
            </PopoverTrigger>
            <PopoverContent>
                <link href="/category/aromaticas">Aromaticas</link>
                <link href="/category/decorativs">Decorativas</link>
                <link href="/category/sets">Sets</link>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;