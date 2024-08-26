import TransitionLink from "@/app/components/TransitionLink";

const Navigation = () => {
    return (
        <nav>
           <TransitionLink href={"/"} label={"Home"} />
           <TransitionLink href={"/work"} label={"Work"} />
           <TransitionLink href={"/about"} label={"About"} />
        </nav>
    )
}

export default Navigation;