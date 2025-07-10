(() => ({
  name: 'OneSignalServiceWorker',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, useText } = B;
    const { appId } = options;

    const isDev = env === 'dev';
    const appIdText = useText(appId);

    function addScript(url, callback) {
      if (url) {
        var s = document.createElement('script');
        s.src = url;
        document.head.appendChild(s);
      }

      if (callback) {
        if (typeof callback !== 'function') return;
        callback(); // Simply execute the passed function
      }
    }

    const url = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';

    useEffect(() => {
      if (isDev) return;

      addScript(url, function () {
        window.OneSignalDeferred = window.OneSignalDeferred || [];
        OneSignalDeferred.push(async function (OneSignal) {
          await OneSignal.init({
            appId: appIdText,
          });
        });
      });
    }, []);

    if (isDev) {
      return <div className={classes.pristine}>ONE SIGNAL</div>;
    }

    return <></>;
  })(),
  styles: () => () => ({
    pristine: {
      height: '50px',
      width: '100%',
      borderColor: 'rgb(175, 181, 200)',
      borderStyle: 'dashed',
      borderWidth: '0.0625rem',
      backgroundColor: 'rgb(240, 241, 245)',
      textAlign: 'center',
      fontSize: '0.75rem',
      color: 'rgb(38, 42, 58)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
}))();
