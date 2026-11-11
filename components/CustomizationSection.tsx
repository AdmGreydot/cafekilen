import Image from 'next/image';
import classes from './CustomizationSection.module.css';
import PriseInfo from './PriseInfo';
export default function CustomizationSection(){
    return (
        <section className={classes.design}>
            <div className="container">
                <div className={classes.wrap}>
                    <Image
                    src="/design.png"
                    alt="Cafekilen med tilpasset tryk"
                    width={800}
                    height={600}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    />
                    <div className={classes.content}>
                        <h2>Gør cafekilen til jeres egen</h2>
                        <p>Vi trykker jeres navn på den ene side og vores webadresse på den anden. En diskret og praktisk detalje, der passer til jeres sted.</p>
                        <PriseInfo/>
                    </div>
                </div>
            </div>
        </section>
    )
}