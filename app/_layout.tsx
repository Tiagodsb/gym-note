
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout(){
    return <Tabs>
        <Tabs.Screen 
            name="(tabs)/plano" 
            options={{
                title: 'Meu Plano de Treino',
                tabBarLabel: 'Plano de treino',
                tabBarIcon: ({color, focused, size}) => {
                    return <Feather name="list" color={color} size={size}/>
                }
            }}/>
        <Tabs.Screen 
            name="(tabs)/configuracoes" 
            options={{
                title: 'Configurações',
                tabBarIcon: ({color, focused, size}) => {
                    return <Feather name="settings" color={color} size={size}/>
                }
            }}/>
    </Tabs>
}