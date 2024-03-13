import classNames from 'classnames';
export interface SectionProps {
    className?: string;
    children: React.ReactNode;
}
export const Section = ({ className, children }: SectionProps) => {
    return (
        <section
            className={classNames(
                'flex flex-col justify-center items-center',
                className,
            )}
        >
            {children}
        </section>
    );
};
