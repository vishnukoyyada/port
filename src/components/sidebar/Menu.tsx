import { FC } from 'react';
import {
    Code,
    Flame,
    Github,
    Home,
    Image as ImageIcon,
    Instagram,
    Layers,
    Linkedin,
    Scissors,
    Share2,
    Shirt,
    ShoppingCart,
    Ticket,
    Video,
    X,
    Youtube,
} from 'lucide-react';
import List from '../ui/List';
import { useMenu } from '../Provider';

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
    const { showMenuVisibility } = useMenu();
    return (
        <div
            className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
            onClick={() => showMenuVisibility(false)}
        >
            <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
                <X className={`text-primary`} />
            </div>
            {/* List 1 */}
            <List link="/" effect="slideUp">
                <Home /> Home
            </List>
            <List link="/" effect="slideUp">
                <Flame /> Trending
            </List>
            <List link="/" effect="slideUp">
                <Code /> Snippets
            </List>
            <List link="https://www.instagram.com/tilluvishnu14_03/" effect="slideUp">
                <Video /> Videos
            </List>

            {/* List 2 */}
            <div className="mt-5">Socials</div>
            <List
                target="_blank"
                link="https://www.instagram.com/tilluvishnu14_03/"
                effect="slideUp"
            >
                <Instagram color="#b5179e" /> Instagram
            </List>
            <List
                target="_blank"
                link="https://github.com/vishnukoyyada/"
                effect="slideUp"
            >
                <Github color="#2a9d8f" /> Github
            </List>
            <List
                target="_blank"
                link="https://www.youtube.com/channel/UCIKHg6VWL2t-Pm5Paz_Teag"
                effect="slideUp"
            >
                <Youtube color="#e63946" /> Youtube
            </List>
            <List
                target="_blank"
                link="https://leetcode.com/vishnukoyyada03/"
                effect="slideUp"
            >
                <Layers color="#f77f00" /> Stack overflow
            </List>
            <List
                target="_blank"
                link="https://www.linkedin.com/in/vishnu-vardhan-326901213/"
                effect="slideUp"
            >
                <Linkedin color="#0277b5" /> Linkedin
            </List>

            {/* List 3 */}
            <div className="mt-5">Projects</div>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/ezClothing"
                effect="slideUp"
            >
                <Shirt /> Ez CLothing
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/eCommerce"
                effect="slideUp"
            >
                <ShoppingCart /> eCommerce
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/HardhatLottery"
                effect="slideUp"
            >
                <Ticket /> Lottery
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/filetransfer-webrtc"
                effect="slideUp"
            >
                <Share2 /> File Sharing
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/dalleClone"
                effect="slideUp"
            >
                <ImageIcon /> Dalle Clone
            </List>
            <List
                target="_blank"
                link="https://snake-nwaliaez.vercel.app/"
                effect="slideUp"
            >
                <Scissors /> Ex Clone
            </List>
        </div>
    );
};

export default Menu;
