import classes from './CustomizationSection.module.css';
import PriseInfo from './PriseInfo';
export default function CustomizationSection(){
    return (
        <section className={classes.design}>
            <div className="container">
                <div className={classes.wrap}>
                    <img src="/design.png" alt="" />
                    <div className={classes.content}>
                        <h2>Gør cafekilen til jeres egen</h2>
                        <p>Vi trykker jeres navn eller logo på den ene side og vores Greydot-logo på den anden. En diskret og praktisk detalje, der passer til jeres sted.</p>
                        <PriseInfo/>
                    </div>
                </div>
            </div>
        </section>
    )
}