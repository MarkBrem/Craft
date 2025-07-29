import { Container } from "../container/Container"
import { HowItWorksList,HowItWorksListItem, HowItWorksTitle, HowItWorksText, CardTitle, SectionHowItWorks } from "./HowWorksStyled"
import { LuLayoutDashboard } from "react-icons/lu";
import { TbArmchair2 } from "react-icons/tb";
import { MdOutlineSaveAlt } from "react-icons/md";

export const HowItWorks = () =>{
    return <>
    <Container>
     <SectionHowItWorks>   
    <HowItWorksTitle>Як це працює?</HowItWorksTitle>
    <HowItWorksList>
        <HowItWorksListItem>
            <LuLayoutDashboard size={45}/>
            <CardTitle>Обери меблі в каталозі</CardTitle>
            <HowItWorksText>переглядай категорії (столи, стільці, дивани, ліжка) й додавай меблі до кошика через іконку.</HowItWorksText>
        </HowItWorksListItem>
        <HowItWorksListItem>
            <TbArmchair2 size={45}/>
            <CardTitle>Додай у кімнату</CardTitle>
            <HowItWorksText>У кошику натисни + — предмет зʼявиться в центрі кімнати.Меблі можна: перетягувати (мишка/палець), обертати, видаляти.</HowItWorksText>
        </HowItWorksListItem>
        <HowItWorksListItem>
            <MdOutlineSaveAlt size={45}/>
            <CardTitle>Плануй на сітці</CardTitle>
            <HowItWorksText>Кімната — це сітка 6×6. Розставляй меблі як хочеш — положення автоматично зберігається навіть після перезавантаження.</HowItWorksText>
        </HowItWorksListItem>
    </HowItWorksList>
    </SectionHowItWorks>
    </Container>
    </>
}