import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import thumbnail from "../mern-blog-assets-main/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post__detail">
      <div className="container post__detail-container">
        <div className="post__detail-header">
          <PostAuthor />
          <div className="post__detail-buttons">
            <Link to={`/posts/post_id/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/post_id/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the title of the post</h1>
        <div className="post__detail-thumbnail">
          <img src={thumbnail} alt="thumbnail" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse
          labore asperiores omnis mollitia harum, voluptas cupiditate suscipit,
          incidunt sit cum ut officiis reiciendis obcaecati! Vel eos explicabo
          ea pariatur minus magnam fuga aut qui, ipsum ex. Doloribus, aliquid
          fugiat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          fugiat eaque alias distinctio veniam praesentium ratione ipsum
          voluptatum hic delectus, vel assumenda maxime quo ea deleniti
          consequuntur, debitis, temporibus molestiae perspiciatis magnam id
          ullam. Nihil reiciendis eaque error non quo dignissimos nemo cum
          possimus ipsa quae molestiae perferendis, dolorum veritatis aperiam
          expedita, sint officiis vel.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat
          reiciendis deserunt quis quaerat dicta impedit dignissimos amet
          labore, qui pariatur rerum odit harum expedita, sequi temporibus
          repellat debitis autem blanditiis ducimus molestiae ab. Magni, sit.
          Magni repellat quo, tempora, delectus quaerat totam ad tenetur veniam
          itaque dolor quia! Accusantium temporibus maiores praesentium expedita
          sit voluptatibus iure, nam atque odio, tenetur labore, totam fugiat
          voluptatem nostrum perferendis vitae. Quisquam magnam omnis saepe
          culpa voluptates fugiat quas dolorum nisi repudiandae porro tenetur
          eligendi sed, ea maxime, consectetur rem enim. Temporibus amet labore
          ipsa laborum repellendus placeat non laudantium nulla consequuntur,
          illo, sit natus, repudiandae voluptatem? Temporibus perferendis
          consectetur quod asperiores reiciendis nobis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
          ad esse. Atque, enim facilis? Voluptates deserunt unde corrupti
          numquam vel.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
          inventore? Asperiores non quibusdam consequuntur consequatur, ea ad
          soluta, beatae quaerat dolor placeat cupiditate aspernatur doloremque
          at velit voluptatibus omnis temporibus numquam aut ratione. Nobis
          consequatur impedit quisquam ipsam, dolores tempora consectetur? Neque
          dolorum minus consectetur temporibus rerum, voluptatem id quisquam
          molestiae voluptatibus, et, explicabo architecto deserunt accusamus
          minima sapiente nostrum adipisci maxime sunt suscipit quidem? Impedit
          suscipit nemo rem amet ab earum minus error fuga hic ad, laboriosam
          repellat facilis tempore dignissimos magnam illo! Laudantium alias
          minus modi a voluptate recusandae quas nobis ratione vitae.
          Consequuntur expedita ea eum sint beatae sapiente fugiat dicta autem
          harum reiciendis molestias adipisci nihil, pariatur architecto, nemo
          corrupti in reprehenderit voluptatibus! Voluptatem ex architecto
          doloremque repellat eius possimus ipsum recusandae dolore corrupti,
          ipsa hic excepturi dicta! Maiores quis doloremque exercitationem
          voluptatibus nam obcaecati pariatur aperiam accusamus impedit, esse
          incidunt at accusantium corrupti voluptatum provident sit cupiditate.
          Explicabo fuga odio id veniam tenetur, sunt ipsum recusandae
          voluptatum reiciendis minus quibusdam rem, aperiam voluptatibus?
          Possimus repudiandae adipisci nam tenetur tempore hic alias
          reprehenderit accusantium soluta, expedita nulla eius inventore ipsum,
          consequatur suscipit minus sit eveniet quo voluptatibus provident
          accusamus sed voluptatem? Voluptatem nisi delectus molestiae deleniti.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
