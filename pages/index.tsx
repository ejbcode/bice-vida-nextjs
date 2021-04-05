import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Bice-Vida Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Versión Next.js del Test de Bice Vida Lab
        </h1>

        <p className={styles.description}>
          En esta versión se realiza utilizando Next.js como framework. Para los
          estilos opté por Css-modules.
        </p>

        <p className={styles.description}>
          Con el fin de mejorar el performance, en lugar de utilizar el endpoint
          suministrado en el reto, opté por hacer la API en next.js ya que el
          endpoint de Bicevida solo retorna un ID, y lo óptimo es que retorne
          todos los ID disponibles.
        </p>

        <p className={styles.description}>
          Opté por hacer Static Side Rendering, así solo haría una llamada a la
          API en el build, se aumenta la velocidad de acceso, mejorando el SEO.
          Se puede configurar el SEO de todo el sitio, o de paginas
          individuales.
        </p>

        <p className={styles.description}>
          El demo cuenta con dos links. El primero{" "}
          <Link href="/selecciona-un-seguro">
            <a className={styles.link}>Seleccciona</a>
          </Link>{" "}
          que se basa en el requerimiento. La mejora es que trae de forma
          dinámica (desde la BD) las opciones en el dropdown, en vez de hacerlo
          hardcoded como en la versión original. Y se elimina el botón para
          hacer la experiencia más directa.
        </p>

        <p className={styles.description}>
          El otro link es de{" "}
          <Link href="/seguros">
            <a className={styles.link}>Seguros</a>
          </Link>{" "}
          que muestra la lista de todos los productos que estén disponibles en
          la BD. Muestra la card del producto basada en el requerimiento, pero
          adicional, la card es un link para ir a la página del seguro y mostrar
          mayor información necesaria.
        </p>
      </main>
    </div>
  );
}
