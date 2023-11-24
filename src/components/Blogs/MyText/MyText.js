import React from "react";

const htmlContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p>
<p><br></p>
<hr>
<p><br></p>
<p><span style="font-weight: 600; font-size: 30px;">Introduction</span></p>
<p><br></p>
<p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
<p><br>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p>
<p><br></p>
<p><img src="https://s3-alpha-sig.figma.com/img/a7d0/c811/28f5e792cf6d43fe7c71c5a8ae0eef43?Expires=1701043200&amp;Signature=Pa4vu39V4PHUeFI6IZG9FEbzTK42S6ehYtPnf0b7YyD8n1iSDU5hjJCCxKBKiymO7fHGGE~aikLBBDQRdBwIahGE8~h2nxqhv4y6tvRIB4pOFjoOpmEYAoPrpkES277gfEypfIhf6TwyJk8yvGn2Gehibydw9SxKRK3J4DMjiPcxUTuf2tkK0bgxfZKqo2AuRZbj2eznJC9W2lHwqU1V3Sok9Bw7c379TxaWhQdJT4KvjiHFXKD2ga01h8eloScEoh7ts-whIOXMTCBhsO2xgvMEa~3DNP8ETz5a5yYB42-JDbwOiK29N86J-yLtkuub8-ffkeq7gzlrdYQmwcYdfQ__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" width="546px" height="364px" style="border-radius: 12px; width: 546px; height: 364px; display: block; margin-left: auto; margin-right: auto;"></p>
<p><br></p>
<p><span style="white-space:pre-wrap;">Image courtesy of Vlada Karpovich via <u>Pexels</u></span><br></p>
<p><br></p>
<p><br></p>
<p>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
<p><br></p>
<p><br></p>


<p style="font-weight: 500; text-align: center;"><em>“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</em></p>
<p style="font-weight: 500; text-align: center;"><em><br></em></p>
<p style="font-weight: 500; text-align: center;"><em><br></em></p>
<p style="font-weight: 500; text-align: center;"><em><img src="https://picsum.photos/40" width="40" height="40" style="border-radius: 100px; display: block; margin-left: auto; margin-right: auto;"></em></p>
<p style="font-weight: 500; text-align: center;"><em><br></em></p>

<p style="font-weight: 600; text-align: center;">Olivia Rhye</p>

<p style="text-align: center;">Product Designer</p>
<p><br></p>
<p><br></p>
<p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
<p><br>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>
<p><br>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
<p><br></p>
<p><span style="font-weight: 600; font-size: 30px;">Software and tools</span></p>
<p><br></p>
<p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
<p><br>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. <br></p>
<p><br></p>
<p><span style="font-weight: 600; font-size: 30px;">Other resources</span></p>
<p><br></p>
<ol>
    <li>Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.</li>
    <li><br>1. Lectus id duis vitae porttitor enim gravida morbi.<br></li>
    <li>2. Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.<br>3. Suspendisse maecenas ac donec scelerisque diam sed est duis purus.<br></li>
</ol>
<p><br></p>
<p><br></p>
<p><img src="https://s3-alpha-sig.figma.com/img/6a65/5d9b/7135d1349b49a305fa7933324564541b?Expires=1701043200&amp;Signature=ipXPBXS0MmpzP1F0AcCUElsW3z~BwscI5p5PmO9anAoa-18bYx0bGCfKs8l1UYGUPoFvXh5OjxGvxi-sFhihmlYEOV3MUMp933lO1F4dTTF-Ey7rxd~JGlgAxombqD6jidMH0sogFqzZkbx~OzKw42QmE30cgBqeWobxvJgXlLZe~MkyxPefvoqu2ipKLVi1uqMLBpWgCN1~054~-ggl0Cj40~u0Eow30tdfpVTghf21dTKr8gCaUxp6Ewvn1qV-jce2geUWcYEn1D8P1qWMj9eMbnj3KmcTydpdN3Gbc02zTyil3CdUAMWFQ7FnWo-AF5BHNCSrX5~btNaFOQyZgQ__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" width="546px" height="748px" style="border-radius: 12px; width: 546px; height: 748px; display: block; margin-left: auto; margin-right: auto;"></p>
<p><br></p>
<p>Image courtesy of Jasmin Chew via <a href="https://www.pexels.com/photo/slim-woman-with-vintage-photo-camera-on-chair-6121448/"><u>Pexels</u></a></p>
<p><br></p>
<p><br></p>
<p>Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.</p>
<p><br>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.<br></p>
  <div style="padding: 32px; background-color: #80808029; border-radius: 16px; margin-top: 60px; ">
    <p><span style="font-size: 30px; font-weight: 600;">Conclusion</span></p>
    <p><br></p>
    <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
    <p><br>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
    <p><br>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.<br></p>
</div>`;

const MyText = () => {
  return (
    <>
      <div class="rich_text_html flex flex-col items-start  gap-5 max-md:px-4 max-sm:mt-16 ">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </>
  );
};

export default MyText;
