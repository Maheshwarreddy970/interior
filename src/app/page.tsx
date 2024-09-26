import Bento from "@/components/Bento";
import Heroabout from "@/components/Heroabout";
import Herosection from "@/components/Herosection";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
     <Herosection></Herosection> 
     <Bento></Bento>
     <Heroabout></Heroabout>
     <Portfolio></Portfolio>
    </main>
  );
}
