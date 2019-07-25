import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './pages/Login';
import Main from './pages/Main';
import UserSettings from './pages/profile/UserSettings';
import AssignTasks from './pages/audit/AssignTasks';
import Splash from './pages/Splash'
import CustManagement from "./pages/home/CustManagement";
import EditCust from "./pages/home/EditCust";
import ApprovalList from "./pages/audit/ApprovalList";
import ApprovalDetail from "./pages/audit/ApprovalDetail";
import ContractSign from "./pages/home/ContractSign";
import FinancialReconciliation from "./pages/home/FinancialReconciliation";
import BusinessQuery from "./pages/home/BusinessQuery";
import Register from "./pages/Register";
const AppNavigator = createStackNavigator({
        Splash:{
            screen:Splash,
        },
        Register:{
            screen:Register
        },
        Login:{
            screen:Login
        },
        Main:{
            screen:Main
        },
        UserSettings:{
            screen:UserSettings
        },
        AssignTasks:{
            screen:AssignTasks
        },
        CustManagement:{
            screen:CustManagement
        },
        EditCust:{
            screen:EditCust
        },
        ApprovalList:{
            screen:ApprovalList
        },
        ApprovalDetail:{
            screen:ApprovalDetail,
        },
        ContractSign:{
            screen:ContractSign
        },
        FinancialReconciliation:{
            screen:FinancialReconciliation
        },
        BusinessQuery:{
            screen:BusinessQuery
        }
    },
    {
        initialRouteName: "Register",
        headerMode: 'none',
        defaultNavigationOptions: {
            headerVisible: false
        }
    },
);
const AppContainer = createAppContainer(AppNavigator);
export  default AppContainer
