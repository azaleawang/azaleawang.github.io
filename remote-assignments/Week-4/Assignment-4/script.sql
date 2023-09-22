-- select all articles with their author’s email
SELECT
    articles.id AS article_Id,
    articles.title AS title,
    user.username AS author,
    user.email AS email
FROM
    articles
    INNER JOIN user ON articles.authorId = user.id
WHERE
    email = "c@google.com";

-- select articles from 7th to 12th sorted by id.
SELECT
    id,
    title,
    authorId
FROM
    articles
ORDER BY
    id ASC
LIMIT
    6, 6;