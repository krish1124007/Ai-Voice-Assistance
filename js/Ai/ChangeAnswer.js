function ChangeAnswer()
{
    gsap.to(btn, { duration: 1, x: 300 });
    gsap.to(Answer,
        {
            display: 'block',
            color:'white'
        }
    )
    gsap.from(Answer ,
        {
            width:0,
            x:300,

        }
    )
}