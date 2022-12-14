import OptionQuizz from "../atoms/Option"
import Subtitle from "../atoms/Subtitle"
import TextInfo from "../atoms/TextInfo"

const MainSection = ( { subtitle, texts, opts, callback } ) => {

    return (
        <section>
            <Subtitle subtitle={ subtitle }/>
            <div>
            { texts?.map( text => <TextInfo text={ text }/>) }
            <div className="buttonsDiv">{ opts?.map( op => <OptionQuizz option={ op.option? op.option : op } action={ () => callback(op) }/>) }</div>
            </div>
        </section>
    )
}

export default MainSection