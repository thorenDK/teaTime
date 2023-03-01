import React, { useEffect } from "react";

export default function Map({ tea }) {
  // console.log(tea);
  useEffect(() => {
    ymaps.ready(init);
    function init() {
      const myMap = new ymaps.Map(
        "map",
        {
          center: [58.371298, 74.557849],
          zoom: 3,
        },
        {
          searchControlProvider: "yandex#search",
        }
      );
      //   arrCord.forEach((cordinates) => {
      //     myMap.geoObjects
      //       .add(new ymaps.Placemark(cordinates, {
      //         balloonContent: `<a href="/${cordinates[2]}">Card of the country</a>`,
      //       }, {
      //         preset: 'islands#icon',
      //         iconColor: '#0095b6',
      //       }));
      //   });
      tea.forEach((el) => {
        const names = tea.filter((el1) => el1.place === el.place);
        // const ids = tea.filter((el1) => (el1.place === el.place)).map((a) => a.id);
        // const named = tea.filter((el1) => (el1.place === el.place)).map((a1) => (a1.id));
        // console.log(named);
        ymaps
          .geocode(el.place, {
            results: 4,
          })
          .then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            const coords = firstGeoObject.geometry.getCoordinates();
            // firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
            //   firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
            // myMap.geoObjects.add(firstGeoObject);
            const myPlacemark = new ymaps.Placemark(
              coords,
              {
                balloonContent: `<p>Страна: ${el.place}</p>
                <p>
                <img style="height: 30px; width: 50px" src=${
                  el.coordinates_x
                } />
                </p>
                Все чаи в этом месте: ${names
                  .map(
                    (el2) =>
                      `<div><a style="text-decoration: none; color: green" href=${`/cardMap/${el2.id}`}><img style="height: 15px; width: 15px" src="https://e7.pngegg.com/pngimages/542/627/png-clipart-share-icon-computer-icons-angle-text.png" /> ${
                        el2.name
                      }.</a></div>`
                  )
                  .join("")}`,
              },
              {
                preset: "islands#violetStretchyIcon",
              }
            );

            myMap.geoObjects.add(myPlacemark);
          });
      });
    }
  }, []);
  return <div id="map" style={{ minWidth: "1300px", height: "770px" }} />;
}
