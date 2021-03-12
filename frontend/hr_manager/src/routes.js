import appIndex from './components/Index.vue';

export const routes = [
    {
        path: "/",
        name: "root",
        redirect: '/index',
    },
    { 
        path: '/index',
        name: "Página Inicial",
        component: appIndex,
    }, 
    { 
        path: '/users',
        name: "Users",
        component: ()=> import('./components/users.vue'),
    },      
];