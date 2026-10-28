// On Persian pages, show dates in the Persian (Jalali) calendar.
(function () {
  if (document.documentElement.lang !== "fa") return;
  var fmt;
  try {
    fmt = new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric", month: "long", day: "numeric" });
  } catch (e) { return; }
  document.querySelectorAll("time[datetime]").forEach(function (el) {
    var p = el.getAttribute("datetime").split("-");
    if (p.length !== 3) return;
    var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2], 12));
    el.textContent = fmt.format(d);
  });
})();

// Persian digits for small numbers (reading time, footer year) on Persian pages.
(function () {
  if (document.documentElement.lang !== "fa") return;
  var map = "۰۱۲۳۴۵۶۷۸۹";
  document.querySelectorAll(".post-meta span, .page-foot").forEach(function (el) {
    el.textContent = el.textContent.replace(/\d/g, function (d) { return map[d]; });
  });
})();
