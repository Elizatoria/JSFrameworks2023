import { useState } from "react";

export function CharacterCount() {
  const [counts, setCounts] = useState(0);
  const count = () => setCounts(counts + 1);
  return (
    <div>
      <textarea onKeydown={count}>
        {count} CharacterCount
      </textarea>
    </div>
  );
}

