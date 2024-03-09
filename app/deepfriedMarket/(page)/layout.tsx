import styles from "./layout.module.css";

export const metadata = {
  title: 'Fast quick grocery store | Deepfried Market',
  description: 'Interview prep',
}

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className={`${styles.navBar}`}>
        nav bar
      </div>
      <div>
        {children}
      </div>
    </>

  )
}
