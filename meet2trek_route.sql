-- MySQL dump 10.13  Distrib 8.0.38, for macos14 (arm64)
--
-- Host: 127.0.0.1    Database: meet2trek
-- ------------------------------------------------------
-- Server version	8.4.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `route`
--

DROP TABLE IF EXISTS `route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `route` (
  `route_id` bigint NOT NULL AUTO_INCREMENT,
  `area` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `difficulty` tinyint DEFAULT NULL,
  `distance` int NOT NULL,
  `full_description` varchar(8000) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `portrait_path` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `resources_path` varchar(255) DEFAULT NULL,
  `short_description` varchar(500) DEFAULT NULL,
  `starting_point` varchar(500) NOT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`route_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `route`
--

LOCK TABLES `route` WRITE;
/*!40000 ALTER TABLE `route` DISABLE KEYS */;
INSERT INTO `route` VALUES (1,'CAMINITO','SPAIN',5,8650,'El Caminito del Rey es un senda aérea construida en las paredes del Desfiladero de los Gaitanes en El Chorro. Es un camino adosado al citado desfiladero con una longitud de 3 kilómetros que cuenta con largos tramos y con una anchura de apenas 1 metro. Se inicia en el término municipal de Ardales, atraviesa terrenos de Antequera y concluye en El Chorro, perteneciente a Álora.<br>Este camino está colgado en las paredes verticales del desfiladero y a una distancia media de 100 metros sobre el río.<br>Este sendero se construyó porque la Sociedad Hidroeléctrica del Chorro, propietaria del Salto del Gaitanejo y del Salto del Chorro, necesitaba un acceso entre ambos “saltos de agua“ para facilitar tanto el paso de los operarios de mantenimiento como el transporte de materiales y la vigilancia de los mismos.<br>Las obras se iniciaron en 1901 y concluyeron en 1905. El camino comenzaba junto a las vías del tren de Renfe y recorría el Desfiladero de los Gaitanes, comunicando y facilitando el paso entre ambos lados. Para inaugurar esta gran obra,  el rey Alfonso XIII se desplazó en 1921 hasta el lugar en la presa del Conde del Guadalhorce cruzando para ello el camino previamente construido. Fue a partir de este momento cuando las gentes comenzaron a denominar a aquel camino como Caminito del Rey, nombre que se mantiene en la actualidad.<br>El paso del tiempo, el abandono y la falta de mantenimiento ha llevado a esta importante y singular obra a deteriorarse de tal manera que se hace casi impracticable. De hecho en casi todo el recorrido, podemos comprobar que faltan barandillas y hay zonas en el pavimento que se han destruido y desaparecido, quedando a la vista sólo la viga de la base.<br>Precisamente,  su peligrosidad y el hecho de ser una de las zonas de escalada más importantes de Europa han contribuido a incrementar su fama, lo que ha ocasionado que numerosos excursionistas se hayan dirigido a El Chorro motivados por recorrer el Caminito. Esto ha propiciado numerosos accidentes (algunos mortales) a lo largo de los años y ha acrecentado su leyenda negra.<br>En el año 1999 y 2000, se produjeron varios accidentes mortales que costaron la vida a cuatro excursionistas, por lo que la Junta de Andalucía, para evitar más desgracias, decidió cerrar los accesos al camino, demoliendo su sección inicial a fin de evitar el paso de los visitantes.<br>El año 2014 supone un hito en la historia del Caminito, pues la Diputación de Málaga ha iniciado en febrero el proceso de restauración completa del mismo y que ha concluido con su inauguración el 28 de marzo de 2015.<br>Este voladizo es perfectamente visible desde la vía férrea y todo aquel que lo contempla sale admirado de su arriesgada construcción y de los pintorescos paisajes que desde allí se vislumbran. Desde la carretera que une Álora con El Chorro, y a la entrada del desfiladero, se puede ver un pequeño y pintoresco puente que une la pasarela que discurre por ambas paredes. Desde el puente sigue el camino peatonal instalado en la roca vertical que termina en la línea férrea de Córdoba a Málaga.<br>El Desfiladero de los Gaitanes está situado en la parte occidental de la Cordillera Bética y, en su conjunto, el cañón cuenta, en ciertos sectores, con paredes de más de 300 metros de altura y con anchuras menores a 10 metros. Está excavado básicamente en calizas y dolimias del Jurásico, existiendo también en la zona afloramientos rocosos del Mioceno. El aspecto morfológico más espectacular es la estratificación vertical de las calizas que el río ha ido taladrando y que ofrece un corte.<br>En la zona del Desfiladero de los Gaitanes existen una veintena de cavidades, algunas de ellas colgadas varias decenas de metros por encima del curso del río, y cuya evolución se ha visto afectada por el progresivo encajamiento del río Guadalhorce, que ha ido profundizando el desfiladero en sucesivas etapas.<br>De entre las diversas unidades presentes se encuentran una formación de conglomerados y calcarenitas, sedimentos miocenos que presentan bellas estructuras sedimentarias, algunos restos fósiles de ballenas y también unas formaciones areniscas de tipo \'taffoni\' y que consisten en unos promontorios redondeados de arenisca en los que la erosión ha excavado una cueva o abrigo.<br>Toda la información referente al Caminito se encuentra en la nueva web del mismo. Pincha aquí para acceder a ella.','Caminito_del_Rey','../ROUTES/SPAIN/MALAGA/CAMINITO/1_Caminito_del_Rey/img/Caminito_del_Rey.jpg','MALAGA','../ROUTES/SPAIN/MALAGA/CAMINITO/1_Caminito_del_Rey','Caminata difícil. Se necesita buena forma física. Se requiere tener paso firme, calzado adecuado y experiencia en alta montaña. El punto de inicio de la Ruta está junto a un aparcamiento. ','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18041.690409557472!2d-4.7954183316169985!3d36.9297929996558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72be9311fa8f01%3A0x599abbe8aafbd4b8!2sCaminito%20del%20Rey%20-%20Acceso%20Norte!5e0!3m2!1ses!2ses!4v1726132950970!5m2!1ses!2ses','https://youtu.be/enmed/AUjtuNOZe4Y'),(2,'CHILLAR','SPAIN',6,280,'Después de llegar a las estribaciones de la Sierra Tejeda desde Nerja se llega al pueblo de Acebuchal, destruido después de que terminara la Guerra Civil. Afortunadamente, ha sido reconstruido <br>Una caminata de 2 km en un lecho de río seco (rambla) da paso a un camino de tierra desde donde se asoma la desalentadora vista de Cisne como un monstruo prehistórico. Aunque no está entre los puntos más altos y es una escalada difícil.<br>Tiene todos los ingredientes para una caminata clásica: la variedad, la necesidad de cuidados para la transición al barranco, la lucha y el sentido de llegada a una cumbre espectacular, refugio para almorzar y una corriente para lavar el sudor después del descenso.<br>En la cima se encuentran las ruinas de un puesto avanzado de la Guardia Civil que data de la Guerra Civil Española. Los soldados de Franco pudieron observar movimientos de tropas republicanas desde esta posición a 1,779 metros. Cuando vea las vistas, se dará cuenta de por qué lo construyeron.','Rio_Chillar','../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar/img/Rio_chilla.jpg','MALAGA','../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar','Tiene todos los ingredientes para una caminata clásica: la variedad, la necesidad de cuidados para la transición al barranco, la lucha y el sentido de llegada a una cumbre espectacular, refugio para almorzar y una corriente para lavar el sudor después del descenso. ','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102254.50054410713!2d-3.954936180733223!3d36.783684382177064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7225167826ddb3%3A0x53bbce5d36620e0f!2zUsOtbyBDaMOtbGxhcg!5e0!3m2!1ses!2ses!4v1726141095705!5m2!1ses!2ses','https://www.youtube.com/watch?v=aYRW6SMR8usY'),(3,'ANTEQUERA','SPAIN',4,10300,'El Torcal, que goza de la calificación de Paraje Natural, está constituido predominantemente por calizas que tuvieron su origen en el fondo marino durante el periodo jurásico, hace más de 150 millones de años.<br> Los materiales depositados en el mar emergieron a la superficie como consecuencia del plegamiento alpino, conservando en buena parte su horizontalidad, a pesar de haber ascendido más de mil metros sobre el nivel del mar.<br> A partir de ese momento, el conjunto quedó sometido a un proceso de erosión, en el que la acción lenta pero continuada de la lluvia, la nieve y el viento ha configurado no solo curiosas siluetas en las rocas, sino también callejones laberínticos que discurren entre ellas y forman en su interior unas depresiones circulares, denominadas dolinas o torcas, a las que este espacio natural debe su nombre..','Paraje_Natural_Torcal','../ROUTES/SPAIN/MALAGA/TORCAL/3_Torcal/img/Torcal.jpg','MALAGA','../ROUTES/SPAIN/MALAGA/TORCAL/3_Torcal',' Se requiere tener paso firme, calzado adecuado y experiencia en alta montaña. El punto de inicio de la Ruta está junto a un aparcamiento. ','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51014.64047448552!2d-4.583563989749063!3d36.9521435543267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd728de00cde0189%3A0x775490ea2a28385b!2sParaje%20Natural%20Torcal%20de%20Antequera!5e0!3m2!1ses!2ses!4v1726510214688!5m2!1ses!2ses','https://www.youtube.com/watch?v=XbAhngYQHIw'),(4,'FRIGILIANA','SPAIN',4,7890,'El sendero comienza en la Plaza del Ingenio y sigue un trazado que combina caminos y senderos forestales.<br> Después de unos 500 metros, se encuentra un carril que se debe dejar atrás, y a la izquierda, el sendero continúa subiendo hasta la cumbre, alcanzando los 257 metros de altitud.<br> Una vez en la cima, se disfruta de vistas panorámicas y se recomienda un breve descanso.<br> Luego, se sigue hacia el sur por un sendero que desciende hasta un carril junto a construcciones cortijeras. Se asciende de nuevo hasta el corral de cabras por donde se llegó en el sentido ascendente, y se vuelve sobre los propios pasos para regresar a Frigiliana.','Cruz_de_pino','../ROUTES/SPAIN/MALAGA/FRIGILIANA/4_cruz_de_pino/img/Cruz_de_pino.jpg','MALAGA','../ROUTES/SPAIN/MALAGA/FRIGILIANA/4_cruz_de_pino',' La ruta Cruz del Pino es un sendero de senderismo que comienza en Frigiliana, Andalucía (España). El recorrido ofrece vistas panorámicas de la cuenca del Higuerón y el mar. ','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409023.09425190114!2d-4.484750358603983!3d36.782730311294735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd722523007a86db%3A0x36930efe0941d799!2sCruz%20de%20Pinto!5e0!3m2!1ses!2ses!4v1726561824613!5m2!1ses!2ses','https://www.youtube.com/watch?v=kxnCJl7tHpc'),(5,'FRIGILIANA','SPAIN',7,20500,'La ruta comienza en el pueblo de Frigiliana y transcurre paralela al cauce del río Higuerón hasta llegar a los impresionantes estrechamientos conocidos como \'cahorros\' o \'cajorros\'.<br>En el trayecto, se cruza la Acequia de Lizar, un canal de riego que lleva agua desde el Pozo Lízar hasta el Pozo Batán.<br>El Pozo Batán es una alberca de aguas cristalinas construida en el siglo XIX, ubicada en la margen izquierda del río Higuerón. Originalmente, alimentaba una fábrica de papel (Batán) que se menciona en documentos del año 1752 y 1847<br>La ruta incluye un bosque de pinos y ofrece vistas panorámicas del entorno.<br>La ruta puede ser realizada en ambos sentidos, pero se recomienda seguir el trazado original para disfrutar de las mejores vistas y parajes.<br>Es importante tener en cuenta que la señalización puede ser limitada en algunos tramos, por lo que es recomendable llevar un mapa y GPS.<br>La ruta es apta para senderistas con experiencia, pero no para personas con problemas de altura o miedo a precipicios, debido a los estrechos pasos y profundas acequias.','Cruz_de_pino','../ROUTES/SPAIN/MALAGA/FRIGILIANA/5_Acequias_Rio_Higueron/img/ditch.jpg','MALAGA','../ROUTES/SPAIN/MALAGA/FRIGILIANA/5_Acequias_Rio_Higueron',' La ruta circular Frigiliana - Acequia de Lizar - Río Higuerón - Acequia Batán es un sendero de baja dificultad que se desarrolla en el entorno natural de Frigiliana, Málaga. ','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4518.821255118616!2d-3.898152291971107!3d36.78761704899499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7225ab5a1501e5%3A0xae3f9112b202b3c4!2sMirador%20Barranco%20del%20Rio%20Higueron!5e0!3m2!1ses!2ses!4v1726563355805!5m2!1ses!2ses','https://www.youtube.com/watch?v=fqRiHaA08bc'),(6,'FRIGILIANA','SPAIN',2,6300,'La ruta comienza en la Plaza del Ingenio en Frigiliana y desciende hasta el cauce del río Higueron. Luego, se toma dirección de descenso por el río, cuyo cauce de agua es mínimo en esta fecha, hasta los Cahorros bajos. Este lugar es muy bonito y merece la pena visitarlo<br>Antigua construcción y corral de cabreros<br><br>Conforme ascendemos, encontraremos una antigua construcción donde los cabreros, ya casi extintos, protegían sus cabras de los carnívoros del lugar durante la noche.<br>Cumbre y vista panorámica<br><br>Una vez pasado el mencionado corral, seguiremos dirección sur, divisando inmediatamente la cumbre de destino, incluso la cruz en lo más alto. La vista panorámica desde aquí es impresionante, con vistas a la Sierra Almijara y la cuenca del Higueron.<br>Recorrido de vuelta<br><br>La vuelta al punto de origen en Frigiliana será volviendo sobre nuestros propios pasos. Es importante recordar no dejar velas encendidas para evitar posibles incendios y ser respetuosos con el entorno por el que paseamos.','Cruz_de_pino','../ROUTES/SPAIN/MALAGA/FRIGILIANA/6_Cruz_de_pino/img/path.jpg','MALAGA','../ROUTES/SPAIN/MALAGA/FRIGILIANA/6_Cruz_de_pino',' La Cruz de Pinto es un pequeño santuario construido en 1643, según cuenta la leyenda, por el navegante Francisco de Pinto, quien prometió construir un santuario en la montaña más alta que divisara tras una tormenta si Dios salvaba su vida y la de su tripulación. Desde entonces, este santuario es de gran importancia y culto en la vida espiritual de Frigiliana. ','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5373.793668128755!2d-3.8994570769559953!3d36.78791248566362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd722542ce61f87d%3A0x9ce1af374280e6f3!2sMirador%20de%20la%20Cruz%20de%20Pinto!5e0!3m2!1ses!2ses!4v1726564377150!5m2!1ses!2ses','https://www.youtube.com/watch?v=kxnCJl7tHpc'),(7,'ARDALES','SPAIN',3,14580,'La ruta se encuentra balizada mediante el PR-A 90, a excepción de un tramo de 700 m que he añadido para llegar a la Charca de la Olla, donde puedes disfrutar de un refrescante baño a mediación de la ruta.<br>Comenzaremos dejando el coche en las proximidades de la Plaza de San Isidro, desde ahí ascenderemos hacia la Plaza de la Constitución donde se encuentra el Ayuntamiento.s<br>Posteriormente nos dirigiremos hacia la Iglesia Nuestra Señora de los Remedios, datada en el Siglo XV, tras la cual veremos la Plaza y Mirador de la Muralla, desde donde podremos contemplar el Castillo de la Peña.<br>Por este carril conocido como Camino de la Castaña recorreremos 1,75 Km donde desembocaremos en la Sierra de Alcaparaín, donde entraremos en un denso pinar conocido como “El Cerrajón”.<br>Continuaremos ascendiendo 800 m, atravesando el Arroyo de las Capellanias, que se encuentra seco la mayor parte del año.<br>Desde aquí podremos obtener unas bellas panorámicas del Pantano del Chorro y del imponente Tajo de la Canana<br>Comenzaremos el descenso y tras 1 Km alcanzaremos la Fuente El Colegial o la Colegiata, donde la fauna de la zona suele bajar a beber de la misma.<br>Seguiremos ascendiendo hasta enlazar con una nueva pista donde deberemos girar a la derecha, para enlazar tras 900 m junto a la carretera MA-5402, donde habrá que cruzar con PRECAUCIÓN y seguir junto a la misma 250 m, dejando a nuestra izquierda una alberca, debiendo girar a la izquierda por una pista de tierra por la que iremos descendiendo hasta llegar al cauce del Río Turón en 2 Km.<br>En este punto podemos desviarnos para ver el Charco de la Olla o proseguir la ruta hacia Ardales cruzando el Puente.<br>Si queremos ver el Charco de la Olla seguiremos recto junto a la finca Paz Fernández, donde tomaremos un sendero junto a una alambrada, dejando a nuestra izquierda el cauce del Río Turón que nos ofrece un espectacular paisaje, nosotros avanzaremos en paralelo al río, debiendo cruzar una acequia.<br>Tras ello veremos la primera poza, donde podremos bañarnos y refrescarnos, después deberemos continuar por un sendero a la derecha para continuar avanzando donde tras 200 m llegaremos al Charco de la Olla, el cual es el objetivo de la ruta, donde alcanzaremos esta gran poza donde podremos echar la mañana si deseamos.<br>Después volveremos hasta llegar al Puente que ahora si cruzaremos en dirección a la Molinilla, donde veremos a nuestra izquierda los Restos del Castillo de Turón.<br>Proseguiremos recto por un carril por el que alcanzaremos Ardales tras 3,80 Km, llegando junto al Puente Romano de la Molina.<br>Tras llegar al pueblo ascenderemos hasta llegar al punto de inicio junto a la Plaza de San Isidro.','Sendero_Cerro_del_Calvario-Cartillo_Ardales','../ROUTES/SPAIN/MALAGA/ARDALES/7_Sendero_Cerro_del_Calvario-Castillo_Ardales/img/more_signals.jpg','MALAGA','../ROUTES/SPAIN/MALAGA/ARDALES/7_Sendero_Cerro_del_Calvario-Castillo_Ardales',' Ruta circular que en todo momento se discurre por carriles o senderos balizados, sin dificultad para perderse donde podremos disfrutar de la Sierra de Alcaparaín y un tramo del Rio Turón, donde si queremos podemos refrescarnos. ','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5373.793668128755!2d-3.8994570769559953!3d36.78791248566362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd722542ce61f87d%3A0x9ce1af374280e6f3!2sMirador%20de%20la%20Cruz%20de%20Pinto!5e0!3m2!1ses!2ses!4v1726564377150!5m2!1ses!2ses','https://www.youtube.com/watch?v=KhslIJ4kJXI'),(8,'ARDALES','SPAIN',1,2600,'La Ruta del Manantial es un bonito paseo que sugieren a los huéspedes alojados en Casa rural Arcos del Capellán para conocer el entorno.<br>Salimos de la casa por el camino de acceso y nos detenemos a ver el estanque formado en la base de una roca por la que resbala el agua que lo abastece. Continuamos bajando hasta encontrar la pista forestal, aquí giramos a la izquierda. Caminamos entre pinos por la pista hasta el siguiente cruce (600 metros) y de nuevo a la izquierda.<br> Caminamos de nuevo unos 900 metros por pista hasta llegar a la altura de la casa, a la izquierda encontramos un sendero que nos llevará de vuelta, pasando antes, por el nacimiento del manantial y la antigua alberca.','Manantial_arcos_del_Capellan','../ROUTES/SPAIN/MALAGA/ARDALES/8_Manantial_arcos_del_Capellan/img/view.jpg','MALAGA','../ROUTES/SPAIN/MALAGA/ARDALES/8_Manantial_arcos_del_Capellan',' En resumen, un agradable paseo para toda la familia, con poco desnivel, de unos 2,5 km que podemos hacer en una hora aproximadamente.. ','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12770.132925574526!2d-4.8902233552154835!3d36.85365344715219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72c78abe828b43%3A0x1e725eb8b93458d!2sCasa%20Rural%20Arcos%20del%20Capellan!5e0!3m2!1ses!2ses!4v1726567981000!5m2!1ses!2ses','https://www.youtube.com/watch?v=kYW8iQGBxNQ'),(9,'ARDALES','SPAIN',1,4200,'La ruta comienza subiendo por el carril desde el Restaurante El Mirador hasta el Mirador de los Embalses, desde donde se disfrutan vistas impresionantes de los embalses y las sierras. A continuación, se desvía hacia el Mirador que da a la Casa del Ingeniero y el Embalse del Conde del Guadalhorce.<br> Después de disfrutar del mirador, se baja por el sendero que enlaza con el Sendero del Gaitanejo y se sigue hacia la derecha hasta el Embalse del Gaitanejo. La ruta pasa cerca de la entrada Norte del Caminito del Rey y luego vuelve a subir hasta el punto de partida, cruzando la pista que baja hasta el Restaurante El Mirador.<br>Longitud: 4,2 kilómetros<br>Tipo: Recorrido circular<br>Ubicación: Ardales, provincia de Málaga, España<br>Altitud: Varía entre 500 y 1.191 metros sobre el nivel del mar<br>Vegetación: Flora y fauna características de la zona, incluyendo pinos carrascos, sabinas, eucaliptos, sauces y fresnos','Sendero_del_Gaitanejo','../ROUTES/SPAIN/MALAGA/ARDALES/9_Sendero_del_Gaitanejo/img/picnic.jpg','MALAGA','../ROUTES/SPAIN/MALAGA/ARDALES/9_Sendero_del_Gaitanejo',' El Sendero del Gaitanejo es un recorrido circular de aproximadamente 4,2 kilómetros ubicado en el término municipal de Ardales, en la provincia de Málaga, España. Comienza en la orilla del pantano del Guadalteba y llega hasta la entrada norte del Caminito del Rey, ofreciendo paisajes impresionantes y una variedad de flora y fauna en la zona. ','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12757.081250527479!2d-4.812169081078556!3d36.9317073095385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72bec90b1735fd%3A0xd3d9c70e24b34265!2sRestaurante%20El%20Kiosko!5e0!3m2!1ses!2ses!4v1726569912099!5m2!1ses!2ses','https://www.youtube.com/watch?v=oci79nLVBP'),(10,'MONTES_DE_MALAGA','SPAIN',3,7540,'Tomamos la carretera comarcal de los Montes de Málaga (A-7000) y una vez pasada por nuestra derecha la Venta El Detalle, aproximadamente a 1\'7 km encontraremos a la izquierda un desvío que está justo en el cartel del punto kilométrico 16 de la A-7000.<br>Desvío<br>Si nos lo pasáramos, en 1\'1 km llegaríamos a la Fuente de la Reina y podríamos fácilmente dar la vuesta y retroceder.<br>Aparcamos nuestro vehículo en el lateral del carril y comenzamos el paseo bajando por el mismo teniendo siempre en cuenta que este tramo hasta llegar al Hotel Humaina está abierto al tráfico rodado al no estar cerrado por cadena alguna. No es lo habitual que pasen vehículos a motor pero debemos estar atentos. Lo que sí es una zona muy habitual para ciclistas.<br>Al poco alcanzamos una curva del carril y una cadena al frente.<br>Por esa cadena es por donde volveremos para terminar el recorrido. Ahora giramos a la izquierda y seguimos en bajada hasta que al cabo de aproximadamente un kilómetro alcazaremos el Mirador del Cochino, en el que destacan, aparte de las magníficas vistas sobre la Bahía de Málaga y la cabecera del Arroyo Humaina, la escultura de un jabalí hecha con restos metálicos recogidos en el parque natural.<br>Continuamos nuestra marcha en claro descenso disfrutando de los olores que nos depara este agradable paseo descartando un primer cruce que vemos a la izquierda hasta que al cabo de aproximadamente otro kilómetro observamos a la izquierda que del carril sale una estrecha senda señalizada por un poste de madera. La tomamos abandonando el carril y prestando atención al piso ya que la misma es estrecha y el suelo acostumbra estar resbaladizo por la umbría de la zona.<br>Al poco llegamos a una construcción que contiene los servicios del área recreativa que ya observamos. La atravesamos viendo las mesas, bancos y barbacoas de esta habitual zona de esparcimiento de los malagueños durante los fines de semana. Dispone de agua potable<br>Salimos del Área recreativa de El Cerrado y justo enfrente se encuentra el Hotel Humaina. Hotel ubicado en pleno Parque Natural y que constituye un lugar ideal para descansar del ajetreo urbano.<br>Tomamos a la derecha (norte) por la pista asfaltada, en subida. Pasamos por un cruce que nos permite volver al inicio de la ruta directamente tomando el carril que abandonamos para ir al área recreativa, pero lo descartamos y seguimos de frente sin abandonar el asfalto.<br>Si nos hemos fijado, junto al hotel se encuentra un mojón kilométrico blanco y azul con la indicación 10. Se corresponde con el km 10 de la ruta que se inicia en la Venta de El Boticario. Seguiremos esta ruta hasta el km 12 donde la abandonamos para buscar el siguiente mirador.<br>Durante esos dos kilómetros pasaremos por la zona más exigente del recorrido ya que nos hallamos frente a desniveles que no nos dan apenas respiro y que rondan el 12%, con tramos donde se alcanza el 15%.<br>Justo unos metros antes del mojón kilométrico 12, a la izquierda vemos una cadena que cierra el paso a vehículos al mirador de Fco. Vázquez Sell.<br>La atravesamos y llegamos al mirador. Un lugar magnífico para reponer fuerzas, descansar y disfrutar de las buenas vistas. Podemos observar claramente muchas de las sierras de la zona oeste de la provincia de Málaga, así como puntos característicos del Parque Natural como son Pocopán y Jotrón así como la arista que separa el parque del valle del río Guadalhorce y de la autovía de la Pedrizas.<br>Continuamos nuestra marcha volviendo a la pista asfaltada y observamos que enfrente del hito que marca el km 12 se encuentra una cadena que cierra un carril.<br>La tomamos y nos desplazamos durante tres km sin apenas desniveles hasta llegar de nuevo a la cadena señalada en el primer waypoint de la ruta. En menos de 100 m llegamos al punto de partida y terminamos nuestro paseo de hoy.','10_Mirador_del_Cochino','../ROUTES/SPAIN/MALAGA/MONTES_DE_MALAGA/10_Mirador_del_Cochino/img/cochino.jpg','MALAGA','../ROUTES/SPAIN/MALAGA/MONTES_DE_MALAGA/10_Mirador_del_Cochino',' Agradable paseo por la cabecera del Arroyo Humaina visitando los dos miradores más característicos de esta zona, el del Cochino y el de Vázquez Sell. Tan solo presenta una zona algo exigente, la subida asfaltada desde el Hotel Humaina hasta el mirador Fco. Vázquez Sell ya que encontraremos en varios tramos rampas con desniveles del 15%. Recorremos en total unos 7\'5 km con algo más de 300 m de desnivel. ','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12777.253692773384!2d-4.402692514149373!3d36.81100875403428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd725f69b02355cb%3A0xba3b4ecc5690ffa4!2sArea%20Recreativa%20El%20Cerrado!5e0!3m2!1ses!2ses!4v1726570982433!5m2!1ses!2ses','https://www.youtube.com/watch?v=vjjnAoX5EEk');
/*!40000 ALTER TABLE `route` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-18  6:28:10
