import Image from 'next/image';
import classes from './Hero.module.css';
import Link from 'next/link';

export default function Hero(){
    return (
        <section className={classes.hero}>
            <div className={classes.heroImage}>
            <Image src="/scene.png" alt="Hero" fill priority/>
            </div>
            <div className="container">
                <div className={classes.group}>
                    <Link href="/" className={classes.logo}>
                        <Image src="/logo.png" alt="Vipperbordet" width={70} height={70}/>
                        <p>Cafekilen</p>
                    </Link>
                    <div className={classes.accent}>Når bordet vipper ...</div>
                    <p>... er Cafekilen den hurtige og enkle løsning.</p>
                    <a href='/#bestil' className='btn'>Bestil jeres cafekilen</a>
                </div>
             
            </div>
        </section>
    );
}