import Home from "../General/Home";
import InvestorsMain from "../Investors/InvestorsMain";
import CompanyDashboard from "../Company/CompanyDashboard";
import SignUpMain from "../General/SignUpMain";
import LogIn from "../General/LogIn";
import SignUpInvestors from "../General/SignUpInvestors";
import SignUpCompany from "../General/SignUpCompany";
import Portfolio from "../Investors/Portfolio";
import AvailableInvestmentsAll from "../Investors/AvailableInvestmentsAll";
import InvestmentCart from "../Investors/InvestmentCart";
import NewFund from "../Company/NewFund";
import GeneralInvestorList from "../Company/GeneralInvestorList";
import Progress from "../Company/Progress";
import InvestedList from "../Company/InvestedList";
import OneFunds from "../Investors/OneFunds";
import NewInvestFund from "../Investors/NewInvestFund";

const routes = [
  {
    path: "/signup/investor",
    component: SignUpInvestors,
    isPrivate: false,
  },
  {
    path: "/signup/company",
    component: SignUpCompany,
    isPrivate: false,
  },
  {
    path: "/signup",
    component: SignUpMain,
    isPrivate: false,
  },
  {
    path: "/login",
    component: LogIn,
    isPrivate: false,
  },
  {
    path: "/investor/investments/:fundID/invest",
    component: NewInvestFund,
    isPrivate: true,
    isInvestor: true,
    isCompany: false,
  },
  {
    path: "/investor/investments/:fundID",
    component: OneFunds,
    isPrivate: true,
    isInvestor: true,
    isCompany: false,
  },
  {
    path: "/investor/investments",
    component: AvailableInvestmentsAll,
    isPrivate: true,
    isInvestor: true,
    isCompany: false,
  },
  {
    path: "/investor/portfolio",
    component: Portfolio,
    isPrivate: true,
    isInvestor: true,
    isCompany: false,
  },
  {
    path: "/investor/cart",
    component: InvestmentCart,
    isPrivate: true,
    isInvestor: true,
    isCompany: false,
  },
  {
    path: "/investor",
    component: InvestorsMain,
    isPrivate: true,
    isInvestor: true,
    isCompany: false,
  },
  {
    path: "/company/investedlist",
    component: InvestedList,
    isPrivate: true,
    isInvestor: false,
    isCompany: true,
  },
  {
    path: "/company/progress",
    component: Progress,
    isPrivate: true,
    isInvestor: false,
    isCompany: true,
  },
  {
    path: "/company/investorlist",
    component: GeneralInvestorList,
    isPrivate: true,
    isInvestor: false,
    isCompany: true,
  },
  {
    path: "/company/newfund",
    component: NewFund,
    isPrivate: true,
    isInvestor: false,
    isCompany: true,
  },
  {
    path: "/company",
    component: CompanyDashboard,
    isPrivate: true,
    isInvestor: false,
    isCompany: true,
  },
  {
    path: "/",
    component: Home,
    isPrivate: false,
  },
];

export default routes;
