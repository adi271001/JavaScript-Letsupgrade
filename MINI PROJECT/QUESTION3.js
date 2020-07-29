var quotes = [
    "Design is not just what it looks like and feels like. Design is how it works.-steve jobs",
    "Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquility.-wiiliam wordsworth",
    "Everyone thinks of changing the world, but no one thinks of changing himself.-leo tolstoy",
    "An equation means nothing to me unless it expresses a thought of God.-srinivasa ramanujam",
    "leave ur girlfriend for ur friends but dont leave ur friends for ur girlfriend because ur girlfriend will leave you but ur friends will stay with u till the last breath.-aditya d",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.-helen keller",
    "I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.-rabindranath tagore",
    "he present is theirs; the future, for which I really worked, is mine.-nikola tesla",
    "perhaps the difference between what is miserable, and that,which is spectacular,lies in leap of faith-sushant singh rajput",
    "I suppose in the end, the whole of life becomes an act of letting go, but what always hurts the most is not taking a moment to say goodbye. - irrfan khan"
]

function newquote()
{
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML =quotes[randomNumber];
}