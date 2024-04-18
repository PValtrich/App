import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    inform: {
        width: '100%',
        height: '5%',
        flexDirection: 'row',
    },
    body: {
        width: '100%',
        height: '87%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nav: {
        width: '100%',
        height: '8%',
        backgroundColor: '#46ACC2',
    },
    informLeft: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
    },
    informRight: {
        width: '50%',
        height: '100%',
    },
    location: {
        flexDirection: 'row',
    },
    cidade: {
        fontSize: 20,
        color: '#fff',
    },
    account: {
        flexDirection: 'row-reverse',
        marginLeft: 10,
    },
    regiao: {
        width: '90%',
        height: '80%',
    },
    container: {
        flex: 1,
    },
    all: {
        flex: 1,
        backgroundColor: '#000'
    },
    searchIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '30%'
    },
    search: {
        width: '70%',
        height: '35%',
        fontSize: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    searchiconTop: {
        width: '100%',
        height: '60%',
        gap: 20,
    },
    region: {
        fontSize: 20,
        color: '#fff',
    },
    cinemas: {
        width: '100%',
        height: '10%',
        backgroundColor: '#fff',
        borderRadius: 10,
    }
})