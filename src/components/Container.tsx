type Layouts = {
  /**
   * class components
   */
  class: string;
  /**
   * 
   */
  children: any;
}

/**
 *
 *
 * @param {Layouts} props
 * @return {*} 
 */
const Container = (props: Layouts) => {
  return (
    
    <section class={`${props.class} justify-center p-5 flex mx-auto items-center max-w-7xl`}>
        {props.children}
    </section>
  )
}

export default Container