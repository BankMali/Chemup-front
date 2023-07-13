export default function BoxLeason({ LessonName, subLessonName }) {
  return (
    <div className="collapse collapse-arrow bg-C-white border text-C-gray3 border-C-gray3">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">{LessonName}</div>
      <div className="collapse-content">
        <ul className=" text-sm px-5 list-decimal">{subLessonName}</ul>
      </div>
    </div>
  );
}
