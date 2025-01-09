import Image from "next/image";
import Photo from "../../../../public/logo.png";

export const FirstSection = () => {
    return (
        <section className="container mx-auto flex flex-row justify-between items-center">
            <Image src={Photo} alt="profile_image" className="max-w-64 rounded-full"/>
            <article className="max-w-[50%] border-2 border-black rounded-3xl p-5 mr-24 shadow-custom">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </article>
        </section>

    )
}