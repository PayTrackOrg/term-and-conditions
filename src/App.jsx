import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function TermsAndConditions() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">
          Términos y Condiciones - Pay Track
        </h1>
        <p className="text-gray-700 mb-2">
          Estos términos y condiciones (&quot;Términos&quot;,
          &quot;Acuerdo&quot;) son un acuerdo entre Pay Track (&quot;Pay
          Track&quot;, &quot;nosotros&quot; o &quot;nuestro&quot;) y usted
          (&quot;Usuario&quot;, &quot;usted&quot; o &quot;su&quot;). Este
          Acuerdo establece los términos y condiciones generales de su uso de la
          aplicación móvil Pay Track y cualquiera de sus productos o servicios
          (colectivamente, &quot;Aplicación Móvil&quot; o
          &quot;Servicios&quot;). Gracias por usar Pay Track. Estos Términos de
          Uso rigen su uso de las aplicaciones. Al usar las aplicaciones, usted
          acepta estos términos y condiciones.
        </p>
        <p className="text-gray-700 mb-2">
          Gracias por usar Pay Track. Estos Términos de Uso rigen su uso de las
          aplicaciones. Al usar las aplicaciones, usted acepta estos términos y
          condiciones.
        </p>
        <p className="text-gray-700 mb-2">
          1. Registro de Cuenta Para usar la aplicación, debe crear una cuenta.
          Usted se compromete a proporcionar información precisa y completa
          durante el proceso de registro. Usted es el único responsable de
          mantener la confidencialidad de sus credenciales de cuenta y de todas
          las actividades que ocurran bajo su cuenta.
        </p>
        <p className="text-gray-700 mb-2">
          2. Aprobación de DJ y Uso Inadecuado de la Aplicación
        </p>
        <p className="text-gray-700 mb-2">
          2.1 Aprobamos manualmente a todos los DJs antes de que puedan usar la
          aplicación. Sin embargo, aunque tomamos medidas razonables para
          asegurar la autenticidad e integridad de los DJs, no podemos
          garantizar su comportamiento o acciones una vez aprobados. No nos
          hacemos responsables por cualquier conducta indebida, comportamiento
          inapropiado o uso indebido de la aplicación por parte de los DJs. Se
          alienta a los usuarios a informar cualquier problema para su
          investigación. La única transacción permitida en nuestras aplicaciones
          es enviar o recibir una solicitud de canción con propina o simplemente
          dar una propina al DJ por una gran actuación.
        </p>
        <p className="text-gray-700 mb-2">
          2.2 Si se detecta alguna actividad fraudulenta, todos los pagos
          recibidos serán recuperados por nuestro procesador de pagos para
          resolver las disputas.
        </p>
        <p className="text-gray-700 mb-2">
          3. Conducta del Usuario Usted se compromete a usar la aplicación en
          cumplimiento con las leyes y regulaciones aplicables. No debe usar la
          aplicación para:
        </p>
        <p className="text-gray-700 mb-2">
          3.1 Violar cualquier derecho de terceros, incluidos los derechos de
          propiedad intelectual;
        </p>
        <p className="text-gray-700 mb-2">
          3.2 Participar en actividades ilegales, fraudulentas o abusivas;
        </p>
        <p className="text-gray-700 mb-2">
          {" "}
          3.3 Transmitir virus, malware u otros códigos dañinos;{" "}
        </p>
        <p className="text-gray-700 mb-2">
          {" "}
          3.4 Interferir con la operación o funcionalidad de la aplicación;
        </p>
        <p className="text-gray-700 mb-2">
          3.5 Recopilar información de otros usuarios sin su consentimiento.
        </p>
        <p className="text-gray-700 mb-2">
          4. Propiedad Intelectual Todos los derechos de propiedad intelectual
          relacionados con Pay Track, incluidos pero no limitados a marcas
          comerciales, logotipos, diseños y software, son propiedad del titular
          de la aplicación o están licenciados a nosotros. Al usar la
          aplicación, usted reconoce y acepta que no adquiere ninguna propiedad
          ni derechos sobre la aplicación o su propiedad intelectual.
        </p>
        <p className="text-gray-700 mb-2">
          4.1 Acciones Prohibidas: Está estrictamente prohibido copiar,
          modificar o distribuir la aplicación o su contenido sin permiso previo
          por escrito. Además, no debe usar la propiedad intelectual de la
          aplicación para ningún propósito no autorizado o comercial.
        </p>
        <p className="text-gray-700 mb-2">
          4.2 Infracción de Propiedad Intelectual: Si cree que algún contenido
          de la aplicación infringe sus derechos de propiedad intelectual, por
          favor contáctenos de inmediato y proporcione suficiente evidencia de
          sus derechos para que podamos investigar y tomar las medidas
          adecuadas.
        </p>
        <p className="text-gray-700 mb-2">
          5. Descargo de Responsabilidad de Garantías Pay Track se proporciona
          &quot;tal cual&quot; y &quot;según disponibilidad&quot;, sin garantías
          o representaciones, ya sean expresas o implícitas. No garantizamos que
          la aplicación esté libre de errores, interrupciones o componentes
          dañinos. Usted acepta usar la aplicación bajo su propio riesgo.
        </p>
        <p className="text-gray-700 mb-2">
          6. Limitación de Responsabilidad En la máxima medida permitida por la
          ley aplicable, no seremos responsables por daños indirectos,
          incidentales, consecuentes o punitivos que surjan del uso de la
          aplicación, incluidos pero no limitados a pérdidas de beneficios,
          datos u otras pérdidas intangibles.
        </p>
        <p className="text-gray-700 mb-2">
          7. Ley Aplicable y Resolución de Disputas Estos Términos de Uso se
          regirán e interpretarán de acuerdo con las leyes de Colombia.
          Cualquier disputa que surja de estos términos se someterá a la
          jurisdicción exclusiva de los tribunales de Colombia.
        </p>
        <p className="text-gray-700 mb-2">
          8. Divisibilidad Si alguna disposición de estos Términos de Uso se
          considera inválida o inaplicable, las disposiciones restantes seguirán
          siendo válidas y aplicables en la máxima medida permitida por la ley.
        </p>
        <p className="text-gray-700 mb-2">
          9. Modificaciones Nos reservamos el derecho de modificar estos
          Términos de Uso en cualquier momento. Cualquier cambio será efectivo
          inmediatamente al publicar los términos actualizados en la aplicación.
          Su uso continuo de la aplicación después de los cambios constituye su
          aceptación de los Términos de Uso actualizados.
        </p>
        <p className="text-gray-700 mb-2">10. Recopilación de Datos</p>
        <p className="text-gray-700 mb-2">
          10.1 Podemos recopilar datos sobre sus hábitos de gasto, incluida su
          historia de compras, detalles de transacciones, información de pago y
          datos financieros relacionados.
        </p>
        <p className="text-gray-700 mb-2">
          10.2 Recopilamos estos datos a través de varios medios, incluyendo
          cuando usted proporciona información voluntariamente, cuando usa
          nuestros servicios o productos, o cuando obtenemos información de
          fuentes externas con su consentimiento o según lo permitido por la
          ley.
        </p>
        <p className="text-gray-700 mb-2">
          10.3 Los datos recopilados pueden ser anonimizados o agregados para
          fines de análisis, pero la información de identificación personal
          puede ser utilizada para fines específicos descritos en nuestra
          Política de Privacidad.
        </p>
        <p className="text-gray-700 mb-2">
          11. Propósito de la Recopilación de Datos
        </p>
        <p className="text-gray-700 mb-2">
          11.1 Recopilamos datos sobre hábitos de gasto para comprender el
          comportamiento del consumidor, mejorar nuestros servicios,
          personalizar experiencias de usuario, desarrollar nuevos productos y
          proporcionar ofertas y recomendaciones relevantes.
        </p>
        <p className="text-gray-700 mb-2">
          11.2 Los datos recopilados también pueden ser utilizados para
          investigación de mercado, análisis estadístico y fines de reporte.
        </p>
        <p className="text-gray-700 mb-2">
          12. Almacenamiento y Seguridad de Datos
        </p>
        <p className="text-gray-700 mb-2">
          12.1 Implementamos medidas de seguridad razonables para proteger los
          datos recopilados contra accesos no autorizados, alteraciones,
          divulgación o destrucción.
        </p>
        <p className="text-gray-700 mb-2">
          12.2 Aunque nos esforzamos por garantizar la seguridad de sus datos,
          tenga en cuenta que ningún método de transmisión o almacenamiento
          puede garantizarse como 100% seguro.
        </p>
        <p className="text-gray-700 mb-2">13. Cumplimiento Legal</p>
        <p className="text-gray-700 mb-2">
          13.1 Cumplimos con las leyes y regulaciones de protección de datos
          aplicables que rigen la recopilación, uso y almacenamiento de
          información personal.
        </p>
        <p className="text-gray-700 mb-2">
          13.2 Podemos divulgar sus datos si la ley lo requiere o si creemos que
          dicha acción es necesaria para proteger nuestros derechos, cumplir con
          una obligación legal o responder a una solicitud gubernamental.
        </p>
        <p className="text-gray-700 mb-2">14. Derechos del Usuario</p>
        <p className="text-gray-700 mb-2">
          14.1 Usted tiene el derecho de acceder, modificar, corregir o eliminar
          su información personal que tengamos. Por favor, consulte nuestra
          Política de Privacidad para obtener más detalles sobre cómo ejercer
          sus derechos.
        </p>
        <p className="text-gray-700 mb-2">
          14.2 Puede optar por no recibir comunicaciones de marketing o anuncios
          dirigidos basados en sus hábitos de gasto siguiendo las instrucciones
          proporcionadas en nuestras comunicaciones o contactándonos
          directamente.
        </p>
        <p className="text-gray-700 mb-2">15. Contacto</p>
        <p className="text-gray-700 mb-2">
          Si tiene alguna pregunta sobre este Acuerdo, por favor contáctenos.
        </p>
        <p className="text-gray-700 mb-2">Correo: info@pay-track.co</p>
        <p className="text-gray-700">
          Este documento fue actualizado por última vez el 19 de julio de 2024
        </p>
      </div>
    </div>
  );
}
function Privacy() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">
          Política de privacidad - Pay Track
        </h1>
        <p className="text-gray-700 mb-2">
          En PayTrack, la privacidad y protección de los datos de nuestros
          usuarios son prioridades fundamentales. Esta política detalla cómo
          recopilamos, utilizamos, divulgamos y protegemos la información
          personal en relación con el uso de nuestra aplicación móvil y
          servicios asociados. Ajustada a las normativas colombianas de
          protección de datos, la presente política se aplica a la información
          recopilada a través de nuestras aplicaciones móviles y cualquier otro
          servicio relacionado que operamos.
        </p>
        <p className="text-gray-700 mb-2">
          Recolectamos diversos tipos de información personal proporcionada
          directamente por los usuarios, incluyendo, pero no limitándose a,
          nombre, dirección de correo electrónico, información de pago y
          ubicación. Esta recopilación es esencial para procesar sus propinas y
          proporcionar una experiencia de usuario óptima y personalizada.
          Adicionalmente, se puede recopilar información sobre las canciones
          solicitadas y las interacciones con los DJs a través de nuestra
          plataforma. La información de uso y dispositivos también se recoge
          automáticamente mediante tecnologías como cookies y balizas web,
          incluyendo datos como tipo de dispositivo móvil, identificador único
          de dispositivo, dirección IP, sistema operativo móvil y otros datos de
          diagnóstico, lo que nos permite comprender cómo los usuarios
          interactúan con nuestra aplicación y facilitar mejoras continuas en
          nuestros servicios.
        </p>
        <p className="text-gray-700 mb-2">
          Utilizamos la información personal recopilada para procesar
          transacciones, gestionar cuentas de usuario, facilitar la comunicación
          entre usuarios y DJs, personalizar la experiencia del usuario y enviar
          comunicaciones relevantes. Los datos también se emplean para realizar
          análisis internos y fines comerciales mediante el uso de datos
          agregados y anonimizados, permitiéndonos entender mejor las tendencias
          y necesidades de nuestros usuarios y mejorar continuamente nuestros
          servicios.
        </p>
        <p className="text-gray-700 mb-2">
          Implementamos medidas de seguridad razonables y apropiadas para
          proteger la información personal contra accesos no autorizados,
          alteraciones o divulgaciones, incluyendo tecnologías de encriptación,
          controles de acceso y protocolos de seguridad física. No obstante, es
          importante destacar que ninguna transmisión de datos por internet o
          almacenamiento electrónico es completamente seguro, y no podemos
          garantizar una seguridad absoluta. Recomendamos que los usuarios
          adopten medidas adicionales para proteger su información personal al
          compartirla en línea.
        </p>
        <p className="text-gray-700 mb-2">
          Para procesar los pagos, colaboramos con terceros proveedores de
          servicios de pago que cumplen con los estándares de seguridad y
          protección de datos. Estos proveedores gestionan todas las
          transacciones financieras y tienen sus propias políticas de
          privacidad, las cuales recomendamos revisar antes de realizar
          cualquier transacción. Nosotros no almacenamos ni recopilamos
          información bancaria personal de los usuarios.
        </p>
        <p className="text-gray-700 mb-2">
          Nuestra aplicación incluye un chat interactivo opcional diseñado para
          permitir a los usuarios interactuar con otras personas dentro del
          club. Este chat inhabilita el intercambio de datos personales o
          sensibles, como números de cuenta, fotos o teléfonos, y está limitado
          a facilitar el intercambio de mensajes con reglas estrictas para
          proteger la privacidad y seguridad de los usuarios. Las interacciones
          en el chat están reguladas para asegurar un entorno seguro y
          respetuoso, evitando el intercambio de información que pueda poner en
          riesgo la seguridad de los usuarios.
        </p>
        <p className="text-gray-700 mb-2">
          Podemos compartir la información personal con terceros proveedores de
          servicios que nos asisten en la operación de nuestra aplicación,
          análisis de datos y mejora de servicios. Estos proveedores están
          obligados a proteger la información y utilizarla únicamente para los
          fines especificados en esta política. Además, podemos compartir datos
          agregados o anonimizados con terceros para fines de investigación y
          análisis de mercado, lo cual nos ayuda a entender mejor las tendencias
          y necesidades de nuestros usuarios.
        </p>
        <p className="text-gray-700 mb-2">
          Los usuarios tienen derechos sobre su información personal, incluyendo
          el derecho a acceder, corregir, actualizar o eliminar su información.
          Para ejercer estos derechos, los usuarios pueden contactarnos a través
          de los medios proporcionados en nuestra aplicación. Responderemos a
          todas las solicitudes de manera oportuna y adecuada, en conformidad
          con las leyes de privacidad y protección de datos aplicables.
        </p>
        <p className="text-gray-700 mb-2">
          Nos reservamos el derecho de actualizar o modificar esta política en
          cualquier momento. Cualquier cambio material será notificado a los
          usuarios a través de la aplicación. El uso continuado de la aplicación
          después de la publicación de cualquier cambio constituirá la
          aceptación de dichos cambios. Recomendamos que los usuarios revisen
          periódicamente esta política para mantenerse informados sobre cómo
          protegemos su información.
        </p>
        <p className="text-gray-700 mb-2">
          Si tiene alguna pregunta o inquietud sobre esta política, no dude en
          ponerse en contacto con nosotros a través de los medios proporcionados
          en nuestra aplicación. Nos esforzamos por responder a todas las
          consultas de manera oportuna y adecuada.
        </p>
        <p className="text-gray-700 mb-2">
          PayTrack retiene la información personal de los usuarios solo durante
          el tiempo necesario para cumplir con los propósitos descritos en esta
          política, a menos que se requiera o permita un período de retención
          más largo por ley. Una vez que la información ya no sea necesaria, la
          eliminaremos de forma segura o la anonimizaremos. Los usuarios pueden
          solicitar la eliminación de su cuenta y datos asociados en cualquier
          momento, proceso que se completará en un plazo máximo de 30 días,
          salvo que existan obligaciones legales que requieran la retención de
          ciertos datos.
        </p>
        <p className="text-gray-700 mb-2">
          Aunque PayTrack opera principalmente en Colombia, es posible que
          algunos de nuestros proveedores de servicios y socios comerciales se
          encuentren en otros países. En consecuencia, la información personal
          puede ser transferida y procesada en jurisdicciones fuera de Colombia.
          En estos casos, nos aseguramos de que se implementen salvaguardas
          adecuadas para proteger la información personal de acuerdo con esta
          política y las leyes de protección de datos aplicables.
        </p>
        <p className="text-gray-700 mb-2">
          PayTrack no está diseñado para ser utilizado por menores de 18 años.
          No recopilamos intencionalmente información personal de menores. Si
          descubrimos que hemos recopilado información personal de un menor sin
          el consentimiento parental verificable, tomaremos medidas para
          eliminar esa información lo más rápido posible.
        </p>
        <p className="text-gray-700 mb-2">
          Podemos acceder, preservar y compartir información personal en
          respuesta a una solicitud legal (como una orden de registro, orden
          judicial o citación) si creemos de buena fe que la ley nos obliga a
          hacerlo. Esto puede incluir responder a solicitudes legales de
          jurisdicciones fuera de Colombia cuando creemos de buena fe que la
          respuesta es requerida por la ley en esa jurisdicción, afecta a
          usuarios en esa jurisdicción y es consistente con los estándares
          reconocidos internacionalmente. También podemos retener, usar y
          compartir información personal cuando creamos de buena fe que es
          necesario para: detectar, prevenir y abordar fraudes y otras
          actividades ilegales; proteger nuestros derechos, propiedad o
          seguridad; cumplir con nuestros Términos de Servicio.
        </p>
        <p className="text-gray-700 mb-2">
          PayTrack se compromete a educar a sus usuarios sobre la importancia de
          la privacidad y la protección de datos. Regularmente proporcionaremos
          recursos educativos, consejos de seguridad y actualizaciones sobre
          mejores prácticas de privacidad a través de nuestra aplicación y otros
          canales de comunicación. Animamos a nuestros usuarios a mantenerse
          informados y a adoptar prácticas seguras en el uso de nuestra
          plataforma y en sus actividades en línea en general.
        </p>
        <p className="text-gray-700 mb-2">
          PayTrack se somete a auditorías de seguridad regulares realizadas por
          terceros independientes para evaluar y mejorar continuamente nuestras
          prácticas de protección de datos. Los resultados de estas auditorías
          se utilizan para reforzar nuestras medidas de seguridad y garantizar
          el cumplimiento de las regulaciones de protección de datos aplicables.
          Nos comprometemos a implementar rápidamente cualquier recomendación
          resultante de estas auditorías para mantener los más altos estándares
          de seguridad y privacidad.
        </p>
        <p className="text-gray-700 mb-2">
          PayTrack reconoce la importancia de la privacidad contextual y se
          compromete a implementar controles granulares que permitan a los
          usuarios gestionar su privacidad de manera específica según el
          contexto de uso de la aplicación. Esto significa que los usuarios
          podrán ajustar sus preferencias de privacidad de forma diferenciada
          para distintas funcionalidades o situaciones dentro de la plataforma.
          Por ejemplo, podrán establecer niveles de visibilidad distintos para
          su perfil cuando interactúan con DJs, otros usuarios o
          establecimientos asociados.
        </p>
        <p className="text-gray-700 mb-2">
          En línea con nuestro compromiso de transparencia, PayTrack implementa
          un sistema de notificaciones en tiempo real sobre el uso de datos.
          Este sistema informa a los usuarios de manera inmediata y clara cuando
          sus datos están siendo accedidos o utilizados dentro de la plataforma,
          especificando el propósito y la entidad que está haciendo uso de dicha
          información. Los usuarios tienen la opción de revisar y modificar
          estos accesos en cualquier momento.
        </p>
        <p className="text-gray-700 mb-2">
          Reconocemos la naturaleza sensible de los datos de localización y
          patrones de movimiento de nuestros usuarios. Por ello, PayTrack emplea
          técnicas avanzadas de anonimización y agregación para procesar estos
          datos. Utilizamos métodos como la k-anonimidad y la privacidad
          diferencial para garantizar que los datos de ubicación utilizados para
          análisis y mejora de servicios no puedan ser vinculados a individuos
          específicos. Además, ofrecemos a los usuarios la opción de utilizar
          una &quot;ubicación aproximada&quot; para ciertas funcionalidades,
          permitiéndoles disfrutar de servicios basados en localización sin
          comprometer su privacidad exacta.
        </p>
        <p className="text-gray-700 mb-2">
          PayTrack está comprometido con la protección de la privacidad de sus
          usuarios incluso en escenarios de fusiones, adquisiciones o cambios en
          la estructura corporativa. En caso de que PayTrack sea adquirida por
          otra empresa o se fusione con ella, nos aseguraremos de que la entidad
          resultante mantenga al menos el mismo nivel de protección de datos
          personales establecido en esta política. Antes de cualquier
          transferencia de datos personales que pudiera resultar de tales
          cambios corporativos, notificaremos a nuestros usuarios y obtendremos
          su consentimiento cuando sea requerido por la ley.
        </p>
        <p className="text-gray-700 mb-2">
          Entendemos la importancia de la privacidad en el contexto de las
          relaciones laborales. Para los DJs y otros profesionales que utilizan
          nuestra plataforma como parte de su trabajo, PayTrack implementa
          medidas adicionales para proteger su privacidad laboral. Esto incluye
          la opción de mantener perfiles profesionales separados de los
          personales, controles sobre la visibilidad de su historial de trabajo
          y la capacidad de gestionar las reseñas y calificaciones recibidas.
          Nos aseguramos de que la información relacionada con el desempeño
          laboral se maneje con la debida confidencialidad y solo se comparta
          con las partes relevantes según sea necesario para la prestación de
          servicios.
        </p>
        <p className="text-gray-700 mb-2">
          PayTrack se compromete a promover la alfabetización digital y la
          conciencia sobre privacidad entre sus usuarios. Regularmente
          publicamos recursos educativos, organizamos webinars y proporcionamos
          herramientas interactivas dentro de la aplicación para ayudar a los
          usuarios a comprender mejor las implicaciones de sus elecciones de
          privacidad. Creemos que usuarios mejor informados pueden tomar
          decisiones más acertadas sobre la gestión de su información personal.
        </p>
        <p className="text-gray-700 mb-2">
          En reconocimiento de la diversidad de nuestros usuarios y sus
          necesidades específicas de privacidad, PayTrack ofrece opciones de
          accesibilidad que no comprometen la privacidad. Esto incluye
          interfaces adaptadas para usuarios con discapacidades visuales o
          motoras, asegurando que todos los usuarios puedan gestionar
          eficazmente sus configuraciones de privacidad independientemente de
          sus capacidades físicas.
        </p>
        <p className="text-gray-700 mb-2">
          PayTrack participa activamente en iniciativas de la industria y
          colabora con organizaciones de defensa de la privacidad para
          mantenerse a la vanguardia de las mejores prácticas en protección de
          datos. Nos comprometemos a adaptar continuamente nuestras políticas y
          prácticas para reflejar los avances en este campo, siempre con el
          objetivo de proporcionar el más alto nivel de protección de la
          privacidad a nuestros usuarios.
        </p>
        <p className="text-gray-700">
          Esta política de privacidad se actualizó por última vez el 19 de julio
          del 2024
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
