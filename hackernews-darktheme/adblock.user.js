// whether to re-number the posts after the removed ads
const FIX_NUMBERING = false;

[...(document.querySelector('table.itemList')?.rows ?? [])]
  .reduce((a, _r, i, rows) => (i % 3 ? a : [...a, rows.slice(i, i + 3)]), [])
  .filter((row) => row.length === 3)
  .filter(([title]) => !title.querySelector('td.votelinks'))
  .forEach((rows) => rows.forEach((row) => row.remove()));

if (FIX_NUMBERING) {
  document
    .querySelectorAll('span.rank')
    .forEach?.((s, i) => s.textContent && (s.textContent = `${i + 1}.`));
}
