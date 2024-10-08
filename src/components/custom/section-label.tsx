function SectionLabel({ text }: { text: string }) {
    return (
        <div className="flex items-center justify-center py-12">
            <div className="text-center rounded-2xl font-helvetica-compressed tracking-wider text-lg lg:text-xl text-[#361566] bg-[#FAD278] w-fit px-3 py-[0.5] font-semibold uppercase">{text}</div>
        </div >
    );
}

export default SectionLabel;
