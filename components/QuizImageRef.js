import { useRouter } from "next/router";
import { useContext } from "react";
import { QuizContext } from "../lib/QuizContext";

export default function QuizImageRef({ children, ...props }) {

    const router    = useRouter()
    const context   = useContext(QuizContext);
     
    const basePath = router.basePath+"/"+context.quiz.path.replace(/(.*)\/[^\/]+\.md$/,"$1/"+props.src)
  
    return <img src={ basePath } alt={props.alt}/>
}