import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/minha_foto_capa.png';

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
            Olá eu sou a Janaina!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto da Janaina sorrindo"
                className={styles.fotoSobreMim}
            />
        
            
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou instrutor de Front-end na Alura 
                e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
            Eu atuo como designer de interiores há mais de 15 anos.
            Mas foi no Mestrado que finalizei em 2020 em Gestão e
            Tecnologia em Sistemas Produtivos que comecei a me 
            interessar pela área de tecnologia. 
            Acabei fazendo um curso de Cientista de Dados de um
            programa das Americanas mas resolvi mudar a rota.
            </p>
            <p className={styles.paragrafo}>
            Fiz o o processo seletivo para a formação da ONE em 
            parceria com a Alura e em dado momento tinhamos que 
            escolher qual trlha seguir... fiquei com muita dúvida,
            porem resolvi ir pro FRont-End, já que sou designer e 
            posso trazer algumas competencias dessa área.
            </p>
            <p className={styles.paragrafo}>
            Estou adorando essa trilha de Front-End, estou no 
            momento aprendendo React e achei incrivel o leque de
            oportunidades que ele permite!
            </p>
            <p className={styles.paragrafo}>
            Espero muito conseguir fazer a tarnsição de carreira.
            </p>           
            <p className={styles.paragrafo}>
            Quero muito atuar como Desenvolvedora Front-End e 
            continuar evoluindo nos meus estudos.
            </p>

        </PostModelo>
    )
}