const time = new Date();
const hora = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();


const prompts = [
  ["hola", "holii", "holi", "buenos dias", "buenas noches"],
  ["quien es pgscom"],
  ["pgscom tiene discord"],
  ["que hora es"],
  ["como te han creado", "como te han hecho"],
  ["vendes mis datos a google", "vendes mis datos a facebook", "vendes mis datos a alguien", "vendes mis datos"],
  ["que haces"],
  ["que tal estas", "que tal"],
  ["que estas haciendo"],
  ["cuantos años tienes"],
  ["quien eres", "eres humano", "eres un robot", "eres humano o eres un bot"],
  ["quien te ha creado"],
  [
    "tu nombre porfavor",
    "tu nombre",
    "puedo saber tu nombre",
    "cual es tu nombre",
    "como te puedo llamar"
  ],
  ["te quiero"],
  ["feliz", "bien", "fantastico", "guay"],
  ["mal", "aburrido", "cansado"],
  ["ayudame", "cuentame una historia", "cuentame un chiste"],
  ["ah", "si", "ok", "okay", "guay"],
  ["chao", "adios", "hasta luego"],
  ["que debo comer hoy"],
  ["bro"],
  ["que", "porque", "como", "donde", "cuando"],
  ["no","no","puede","no gracias"],
  [""],
  ["jaja","ja","lol","jeje","gracioso","broma","jaj", "jajaja", "jajaj", "jajajaj","xd"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hola!", "Hola!", "Hey!", "Hola!","Hola"],
  ["PGSCOM es un programador, creador de contenido, desarrollador de videojuegos, un editor... Un poco de todo"],
  ["Si, tiene discord. Entra al server con este link https://pgscom.gihub.io/discord"],
  ["Son las " + hora + "... espera... Anitiquiti? Algunos entenderan eso..."],
  ["Me han creado con java y html."],
  ["No, no vendo tus datos a ninguna empresa. Estas hablando con un programa y esta conversacion no la puede ver nadie, solo tu. Cuando reinicies la pagina, toda la conversacion se borrara."],
  ["Hablar contigo :)"],
  [
    "Bien, y tu que tal estas?",
    "Muy bien, y tu que tal estas?",
    "Perfecto, y tu que tal estas?"
  ],
  [
    "Poco",
    "A punto de irme a dormir",
    "Puedes adivinar?",
    "Ahora mismo no lo se"
  ],
  ["Soy infinito"],
  ["Solo soy el bot de PGSCOM", "Yo soy el bot de PGSCOM. Que eres tu?"],
  ["Me ha creado PGSCOM, con todo su esfuerzo y dedicacion. (Rima y todo)"],
  ["No tengo nombre, solo soy el bot de PGSCOM", "No tengo nombre, solo soy el bot de PGSCOM"],
  ["Te quiero yo tambien", "Te quiero yo tambien"],
  ["Alguna vez te has sentido mal?", "Encantado de escucharlo"],
  ["Porque?", "Porque? No deberías!", "Porque? No deberías!"],
  ["Que pasa?", "Érase una vez..."],
  ["Cuentame una historia", "Cuentame un chiste", "Cuentame algo sobre ti"],
  ["Chao", "Adios", "Te veo luego"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Buena pregunta"],
  ["Es ok","Lo entiendo","De que quieres hablar"],
  ["Porfa di algo :("],
  ["Jaja!","Muy buena!"]
]

// Random for any other user input

const alternative = [
  "No lo he entendido :/",
  "No lo he entendido :/",
  "No lo he entendido :/",
  "No lo he entendido :/",
  "No lo he entendido :/",
  "No lo he entendido :/"
]

// Whatever else you want :)

const coronavirus = ["Ponte la mascarilla", "Ponte la mascarilla", "No tengas covid", "Son tiempos dificiles"]