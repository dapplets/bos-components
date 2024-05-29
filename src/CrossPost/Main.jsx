const getTopContext = (ctx) => {
  return ctx.parent ? getTopContext(ctx.parent) : ctx;
};

const buildShareLink = (targetUrl, mutationId) => {
  const url = new URL("https://augm.link/mutate");

  url.searchParams.set("t", targetUrl);
  url.searchParams.set("m", mutationId);

  return url.href;
};

const buildRepostText = (shareLink, text) => {
  return `Forwarded from X with [MutableWeb](${shareLink}):\n\n${text}`;
};

const handleCrosspostClick = () => {
  const post = props.context.parsed;
  const { mutationId } = getTopContext(props.context).parsed;
  const shareLink = buildShareLink(post.url, mutationId);
  const repostText = buildRepostText(shareLink, post.text);

  Near.call({
    post: {
      main: JSON.stringify({
        type: "md",
        text: repostText,
      }),
      index: {
        post: JSON.stringify({
          key: "main",
          value: { type: "md" },
        }),
      },
    },
  });
};

return (
  <button disabled={!context.accountId} onClick={handleCrosspostClick}>
    CrossPost
  </button>
);
