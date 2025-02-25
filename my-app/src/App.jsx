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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
