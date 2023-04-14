/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { GetMainAppComponents } from './src/navigation/MainStack';

const queryClient = new QueryClient();

const AppComponent = () => {

    return (
        <NavigationContainer>
            <QueryClientProvider client={queryClient}>
                {GetMainAppComponents()}
            </QueryClientProvider>
        </NavigationContainer>
    )
}
    

AppRegistry.registerComponent(appName, () => AppComponent);

