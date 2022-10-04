import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMongodb, SiTypescript } from "react-icons/si";
import { DiNodejsSmall, DiJavascript1, DiCss3Full } from "react-icons/di";

const renderTech = (tech, size, title = "Tech") => {
    switch (tech) {
      case "React":
        return <FaReact size={size} title={title} />;
      case "TailwindCSS":
        return <TbBrandTailwind size={size} title={title} />;
      case "CSS":
        return <DiCss3Full size={size} title={title} />;
      case "NextJS":
        return <TbBrandNextjs size={size} title={title} />;
      case "JS":
        return <DiJavascript1 size={size} title={title} />;
      case "TS":
        return <SiTypescript size={size} title={title} />;
      case "NodeJS":
        return <DiNodejsSmall size={size} title={title} />;
      case "MongoDB":
        return <SiMongodb size={size} title={title} />;
      case "Redux":
        return <SiRedux size={size} title={title} />;
      default:
        return null;
    }
};

export default renderTech;