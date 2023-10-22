import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}
export const Sidebar = ({className} : ISidebarProps) => {
    return (
        <div className={classNames(cls.Sidebar, {}, [className])}>
        </div>
    );
};
