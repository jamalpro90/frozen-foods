function FooterItem({ title, contents }) {
  return (
    <div className="flex flex-col mr-10 mt-4">
      <h4 className="font-medium text-xl tracking-wide">{title}</h4>
      {contents.map((content) => (
        <a key={content} href="#" className="pt-1 text-base tracking-wide">
          {content}
        </a>
      ))}
    </div>
  );
}

export default FooterItem;
