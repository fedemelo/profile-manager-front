
export default function getMessages(lang: string) {
    switch (lang) {
        case 'de':
            return require('.././languages/de.json');
        case 'es':
            return require('.././languages/es.json');
        default:
            return require('.././languages/en.json');
    }
}