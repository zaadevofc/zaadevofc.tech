const Container = (props: any) => {
  return (
    
    <section class={`${props.class} justify-center p-5 flex mx-auto items-center max-w-7xl`}>
        {props.children}
    </section>
  )
}

export default Container