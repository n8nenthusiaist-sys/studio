'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const caseStudies = [
  {
    company: 'Ambition - Software Productivity Co.',
    results: '73 new leads in 6 weeks',
    insights: 'Systematic persistence pays off. The 8th follow-up generated as many leads as the 2nd email, proving that most sales reps give up too early.',
    imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhMTExIVFRUXGBUYGBgXFRkgGBUXFxobGhcWHhgYKCggGRslHRcaIjEiJSkrLi4uGh8zODMsNygtLisBCgoKDg0OGhAQGy0mHyIvLSstLS0tLSsrLTAuLy0tNy01LS0tLzArLS0vLTUtLSsvLTc3NS0tLS0uMC0vKy0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAwQFBgECBwj/xABQEAABAwIEAAgJBgkKBgMAAAABAgMRAAQFEiExBgcTIjJBUWEUFnGBkZOhsdFSU1VyksEVIzNCQ1RzguEXNDVilKKywtLwCCVEY3SzJIPx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAsEQEBAQABAwIEAwkAAAAAAAAAARECAxIhMVETQcHwBCLxMmFxgYKRobHh/9oADAMBAAIRAxEAPwDhtFFFAUUV0Xg/xYtv2DN+9iLNq26VpAdRoFJWtEZyoAk5CaDnVFXThnxeO2LLd02+1dWqzlDzR0CtYkaiDBEgkSIMGJpdAUUUUBRVzvuB7SMEt8SDiy468WyjTIAFOiR1z+LHpNUygKKKXsbVTrjbSYzOLShM7SogCT2SaBCirY9wLNviLVjfXDVuFAKW6DmQhJBI1OXUkRroJmoHG7Rtm4daaeD7aFlKXUiA4B+cB/EjskUDGinmD2rbr7TTjoZQtaUqdUJDYJgqI7vKPKKstrwEVdYhcWVhcNXCWkcoHScqFp5gMFOaSFOZew5SaCnUUUUBRVy4veAn4TTdKNym3TbhtSipEgheckzIygBs+mnXCPizcZtlXdrdM3zCNHFMEZm+0lIJkCRMGQDJESQFDooooCiirtxn8DGsNXbJacW5yrRWc8aGYgZeqgpNFXfi04GNYj4Xyji0cg2FpyZecTm0M9XNqkUBRRRQFFFFAUVNcDMGTeXtvbLUpKXV5SpMSNCdJ06q34cYIiyvri1QpS0tFIClRJlCVaxp10EFRRRQFFFFAVM4N0D9Y+4VDVM4N0D9Y+4UENRRRQFd1w2xtHuC9ki8uTbNcq4eUCCrnB5+EwJ3117q4VVru+Gql4SzhfIpCWnCsOZjKpW4uMsQPykb9VBcsW4UYczY22FWDrlyC+2tbq0FIH40LIAUAZKgBoIidSatPGbjZViLGEckyGLw2vLuQeVUC/okKBAGiIEg9I15/tH8jiFxOVSVR25TMeyrHw24auX943eBsMLbShKcqiYLalKSuSBrKvZQdge4VqRjacFTbMeAwlotckNQpnlM0bRJAiCCAeszTKwsGcHtcbvLZpCnmbnkWisTybauRISDvCS+Z7ciZqqp45VyHlYdaqvUoyC5I1GhE5YnYnZQ3PVpUHwT4yH7U3QeaRdtXSlLebd0Clq6StiBM6iI0G0UHRsRxhd5g2F3DqW0rcxFnMG05Ukh11JVl7TEntJNZ4QIHjbZCBHJDq/7b1c/4ScZa7m0btW7Rq2S08l1rkTARkzZUhMRMqknrMmNamTxzkuNXCsMtVXKAEl8zmKYIIRpLcyes6EjroLW2hFoMfxRDaF3LVyttsqTIbEN84Dq1dk/U8tVtjjCXcuYbcG0CLwPpZXdBuGnWnSpCm+9UEEa6ELiJIqv4ZxnPNXV46bdt1i8UVPWzhJQZBGiuowYMggjcaAhvwp4w3blNs0ww1aW9ssOttNAEB0EkLJgAwSrQAdJUzNB1jhFi7i+EthaKylpsKcTzRmzLZcBk9Y0phZKTdvcIsLIBUtTj7Ij88BIPoWlk+mqbiHG1ytza3Zw9lL7BJUsLMugtqRkmJSkZyYk7CoGx4dOtYqrE0tjMpa1KazHKQtJSUlUajWdtwKDo2LrFoeDeFgAKD1q+8OvMXBA7wVrd+yKs/BjFXBwixO0GXkuTQ/0Rmzhu1Rv2QTpXD8X4bu3GKN4ktsS24ytLWY5QGcpCM0TBIJmN1GpKz4zXm8VexNLCJeQG1tFRjKEtjRcSDLSTMdooLbwIxxzGbXF7N8IU+4gPtACAVIQlAAA6ICm2Tp1qNR3G+4LOxw3CkwFIbS89A3XBAPnWXTHkpfitacusWcxO3aZs7RvR5sKAQhJZiAIAgqTnJ0AOvloXGHj3huIXNwDKCvK3vHJo5qCAdpAzR2qNBeuI7+Z45/46P8ABcUp/wAPw5mKFz8hyKOUno7OTM6dHNVP4vuHZwxNynwZD6bgNpUFqgQjOCIg5gQ4Znspzwk4zHn7dVpb27FlbK6aGEwV9oKhAynSYAJiCSDFBd+BtzcWeFW7qTZYehap5d8qW7dakwWwnRJG3OkBOkTNPeExw2y4SMuXLSENuWoXmyShNwXFpS6pI/qoiY0JCj1mqDhfGcUWTVpcWNvd8h+QW6NEROXMiOfExoUyAJ7acXvG7cKvmr5thCFJZ5BxBUVIdbzFcdRSQSSCO7cSCFs4fqvHcMfW6bPE2QuUXTCkpcthIjmJBEA6GFEwrnaa1YuGHCx+0xDCWGkNZbjkUOqUiVlCnEoyhU6AZiR39tcmxvjHC7R2ztLFmyaeMu8mSVL20BgBI0jY6aaVrwi4ePXl1Y3XguXwQtkJSpRDmRYXqY0nLFWS30HXMBsm7fGMb5NCQksMOZMvNlSCVCOwqkn6xqr22MKxnA8QXdttcpayppaEZcuVIWEjeNikxuFeeq41xuPN3l3di0QF3DbbeVS1FLZbSQFEQMw11Gnlpjwg4yi9ZqsrayYsmnCFPcj+kOh0AAyg5RO5gATFQdB4V8IlYI7h9hZsNcipCFOkolT+ZeRWo/OMEzr0h1CKVc4NC2x19VnZ26h4Mh4qeXkZtFKUtKlAJSrU8nIAAiVagbUTCuNlSWmEXVixduW8Bh5zRaIjKSSFSoZRqImAd9aZYPxp3jV7cXbqG3xcJCHWVCEFCQQhKd8oSCRrMhSpkmaC/wDDrLd4A/cPP2948w6gIuGW8oTmcbSUd+jh20PNO4mnXGpwhWy9bWDbTITesoaedKTyobWsoCUkEAZcyyJkSrbt53jXGYHrF+wbsGbdlxSSkNKIyZVIXrpCyVI1Omhjqmonh7w1XiTrLpaDJabCBlWTMEnNMCDrQdoxHhIu1xmxwphllFplb5pb1zELIUkzoRlGu8zM1x7jh/pi9+uj/wBaKn0cciyWHXcPtnbtoJT4Qoc8oB5wAiUEgq1BgFRIGsVReFuOG9u3rpSA2XSDlBkCEhO536NBEUUUUBRRRQFTODdA/WPuFQ1TODdA/WPuFBDUVshJJAAJJ0AG5J2FS2DYQbhxplABW4QlOYkCT2xJjzGgh6Kt95wFu2yoG3KgAVSlY1SADISohc69EpCpBESCBqngNeEgC1USSRHKN7grCh09wW3AR1ZFTEUFSoq0P8D7pCFLXarSlKOUUSpIyo7SCqQf6sSeytk8EHFNtuNht0LSlQCHCCkKWppOblQkAlxtaYAnqSdoJCq0VbW+BF2SoeDFJSFEhSwDCF8moxOgzTzjCYQszCTTa+4LPso5R23U2iGzKlAflMwQImSTkVzQJGUyBQVuil7psJVA7KRoMUUUUBRRRQFFZoigmsLwJb5KWwCUpClFTiEJAKgkStwpSJUpIAnUny04b4J3JTmFs8RKQOYqV5sxBSN1iEKJKZAAnY0hheOLYJLagkqASoKbQtKgFBQlDgUkwpKSDEgipVrh7epCEi5ISgQkckzAGTJB5vO5ums9u+tXE0ztuCN0taEJtH8y+jmbWkESkFWZQACQVpkkwMwncUh4uPc0m3dQlRbhS0KSj8acrZK1AJAUZAJMaHsNSCeHN4DPhBJlJ1ZZOqcmVUFBEjkmyDuMveZbYtwofuUJbfdK0Jywnk20xlzhPQSDpyq/tdwhhrd3gbdJE+DOEyRlSCpQhS0mUokjnNKGu+nURLG5wJxtOZxl1CSQApaFJBJzQASIM5F/ZV2GpdHD2+C1uC6VmXlzkttHNlASnQpgRAOm51MnWmOIcJ33mm2XXlLbbjIkpTzcqA2NQATzRGpO5O5JLDUK47lJCQBHXuo98nbzRSC1k6kknvNbOqkk9taVbyt8VTm1Kl80gqTt1nJ3js++kHmlJMKBB76VWOYgDrKj5ToAPR763efhax0k5laHbfcdh7xXayXj+b18ef4zf8IaUUo+3B020I8hEjz1pXCzLlViis1u2yVbCoE6KX8FV2e0UeCq7PaKBCil/BF9ntFZ8DX2e0UDeinHgS+z2ijwJfZ7RQN6mcG6B+sfcKjvA19ntFSWEJIQQflH3CgZYSIWV/IQtc9igk5D9sppWwxNTRQtBUlaNUqTEg9utJWPQf8A2Y/9rZpqKT1c5+1b9/flOW3CV9tORt51CcqkQCOislSt9jmUTm3EmCJp/fcOrp1aFlwoKAQAgc3XlCpRCyrMVcquc0g5tqsvFrwJsbi1N1eqVznS02kLKRoAZJGpJk9cAD0XdviwwZSsoSSr5IuFZh5pnqNb7bmta40vhdclGQvOFBQtEQjoOCFiYmVDQncjSY0pG04RvNZeTccTkjLGWBlUtYEHcZnXDB+Wa7ieKbCvmXPXL+NYXxT4UN2XPXL+NTDXGPHS8mfCHZ115s6qzkE9Yza5TpqrTnGWl7wheeAS64tYGTQ5d0BQSTG5AcXqdTm1JruH8lmEfNr9cv41u3xU4Qf0Sz/9y/jTDXn61aD77Tc5QtaET1jMoCfbXqCz4IYI1LHgtsVNJTm5RAUuDEFS1DUmR19Y2qCHFhhbSkuIaWFIIUk8qswpJkaE9oro6bJvOpeRGZYAUrKJUBsCesUmedVBs8DsIX0bKzV5Gmz7hSh4D4X9H2vqUfCp5DIGwSPIP99tbxWVV7xGwv6PtfUI+FJHgdhP6hajWNWUb+cVZQPvrXkR2CgrfihhH6jaeqbrQ8DsKO1hanyMo+FWfkh2CtFMDsoKm5wOwz9QtvUo+FIngfhv6hbepR8Ktqrbu99Jm07vfWtRVk8DsNP/AEFt6lHwrbxLw79RtvUo+FWcWvdWeQNNRVxwLw79RtvUo+FKo4FYb+oW3qUfCrHyFbpaoINvgPhn0fa+pR8KWHAbC/o+19Qj4VOpQayFGSBGlZaVx/gDhxIy2dskbH8Qj0p2yq318nYK1TwSwc5v/hWfNMKllsZT2GRVm53dTS7sStISCEjNKhEhYggoUNJSZ9lal3JaK/ZcE8IUJNnZnMSQOTb6MkJ06tANO2adI4F4SQSLG0IG5DLcD2VP8ltzU6babVkAjsqcrt0cg46uA9i1h6rphhthxpTf5JISFpWoJKSkaHpAzvpXF8DUgLaLglsOIKxEygLBWI65TOnXXqLjE4Pu39i7atrbQpZbIUvNlGRaVHYE7CuAcJ+LDELIt5Um55TN/NkOryZcvSATpObTtg9lQSZvsEKkLNu6MpQSgJMH/wCQ4taRlUApPJqSnnyciUJEKBNaqxHCSkNlgZdMy0MkLJHgkALJzhHMuZghRB3zKJNS8VcS/Ubz+zvfCjxWxL9RvP7O98KuJq3WVxgqACW1qVLk5kOFIGeUwhSiNEpAEz0+eDrSancGI/JuyQdRygykoGsBUFQczEAAIylAiQqqr4rYl+o3n9ne+FZ8VsS/Urz+zvfCmGrHbfgw28qQrlkW6yrnrGe55qW0gTBSSpajlACUoEnUw+NxgmYjkXcmdREcqFQUNgJzlRJAKXOoc5SdMs1QcQw26Yjl2X2c05eUQtGaN4zATTPlFfKPpNO01dcbXhxZAtm3EvAt6lThChC+UkKJSNchEAbeWoOy/P8Arf5U1HOLPIoMmeUcEzuAlvr8/tNO8H6B+sfcKzGqj8OeCXBmnKQpKo6krBSTHWRM+UUncMlCilW47Nj2EHrBGoPWCKRp63dJUkIdBIT0VpjOgfJg6KTPUSI6iNQTnZZdjvnEnZtuYSkupSoJuHFDMAQFDLB169a6SUJ7R6RVD4juTThUFSVp5Z0zByno/KA17q6KEoJ6M9+XQ+eINbnLYssvoQ5GsLYHX7qe5aRduUJ3Ukb7kDYgE695HpFRcMpb7/sq+FbJU33/AGVfCl/Dm/lo+2KWS8DMQY312q7DETeuIg7/AGVfCpdVuCrNKtogHTr18utMMQc0OlSKmpMydopvspPwQfKX9s04rRpuJ1J8prepbaNFEAEmI1mdo65pqTbOwn8S5rIHNVrG4HbFPI++sBA7/SaS4GAsrTNk5NjN8nIjNtO2+1HgNpmyckxm+TkRm7dt6kaK18Tn70MvwRb/ADDXq0fCsfgi3+Ya9Wj4U+op8Tn70MfwRb/MNerR8KcNWyEjKlCUgbAAADzClqKl5cr60acmOwVgtA6ECPJSlFZCCUtkiAmdxp2Hf00M9Jf7v30sBSLHSX+799Ai/akqJlWsfplgaf1RoKcZJRlJOwEhWv2t/PSLjr2YgNoKdMpLhBO0ynLpues7d9ZQ49mALaAmTJzmQNYIEanbSR19kGhVhsJEZidZ5ypPpNKTWaKgTVTG5Tzk/vfdUhr2Dr6/RTa4Qc6IjZW4ns7xVDZTdJPtqynLBV1TtUipP+yYrQmN8v2v4U7sTEeptzWAjqiVHzjby61s22r84JHkUT7wKflBI0jyg/wrAZVpttG/X27VdMc048WR+C1EgEh1ojuMkSPMSPPXnlptSjCUlR7ACT6BXqrjH4Lv39iq2aU2lZW2rM4pQTCTJ6KSfZXKbfiUxZoLKH7M5kKSQHHZUk/mglsQZA6xWeVueFkm+XMb9QGVsEEIBkjZSzqs98aJnrCAeunuD9A/WPuFRVwypClIWClSSUqB3CkmCPSKlMG6B+sfcKSZMLdqGooooPS/EEojCZAk8u7p9ntroimxJ/FecZZNc74gZ/BOkTyzu+35tdJGaeqPJrRLJfUnyAI/OH76vjTdLZyhKYIGnOk7HSnxqGxSwbfZU24lSkkgwggGQpR66vCce6aTjJ6HRZVvlRP1TWwS52J9BqrK4HWcg+DvykpUIU2NRJjmkHzHu7NLiy/mBkFOsc6NdtdCdNY81depOnM7Lv8ALPrVRN+FxqB6DUwpskk5jERH3+WmOIrEHUemnym5M5jERH3+WuQ15A/LX1dnwpRCYEST3n+FatNkbrUry5fuApSoIzG3LdDfKXCw2hJjOVlIBUoACQRqTAqHcxrCtzdNDSZ5dWgHXvoBBqbxa0Q62pDjTbySUyh1OZBhU9GFajcab1BDgxadeF2Gx/QD0fku2gnDg7JmUkykJJzq1ATl6jvHWPLUhTa1fUQc6Qk6RlzEEQNdUiNZEd1LpdB7fQfvoMqNVLhlwlu7VTIt7JdwlYUVKSh5QQQUgA8ihUaEnXsq1ujQ00WHJbKXMqYOZPJFWYyIOYHm7H00HPzw+xPMB+CnI1k8je6AHeOR6xr8Kv3B+7cetmXXWiy4tAUps5pQTukhQBHnFIqRcEGLiJAAPgxkHXnb9kadvorZaX9Yfjs/EEzIESO4z19dBKZaMtRikv8AU+AP/HVtG2/b8Kd2rhCQlZKldauTUkGe7WBr29VAsTvoRHtpK2MqX+799Ku9E+Q0hZ7q/d++gVS0cxVnVBHR0yjbUaTOnbmtV25KcudY7wRI7tR76Wo1oNC1qk5ladUiFaRqPbpRaLZ5pGdYkzmBEjWYEiI6tRtS9YPkoNC3zgcytujpB79pnXqNaPpBWj94+6lqQfVz0Dtzf5aBs86lHNUlQAIKconSIikF3qSScy/Vp0qQWsakidY9lJuLgnTTX9Eo+0VPCd3yNRfj5S/VjShOICemsj9mO7+Pppy052ie7klD2nyVubhHyVerV8KpLqGxjhVb2jZeuHFpbBAnkidVbDm61XbjjkwcDMHnFlIJCUsrlWmwzACT3kCr6UoXzSiRvqjT26UjcYZbqBQthtSVAggtpKSOsEEbUV40xW85Z957Ll5Rxa4mcudRVE9cTT/AAboH6x9wprj9slq6uG0CEIedQkTMJSsgCTvoKdYN0D9Y+4UENRRRQel+IFM4TEkfjndRv8Am10gtmZzq8nNjybTXOP+H4/8pH7d3/LXSswoA00ZBymInv23NO5pkhMpIgmZ2JB3PWNRQKtJVrOTugddKISOvL5hTHwBHY561341lNkgEGHNNfyrnuJ1rWcfe/2/6XzdYxEJg7eyn6mzM5iBER39tRWIjQ6GpmshFDSgZLiiOwhP3ClqKKBJXWNdezz0IIHb56FomklWgMSkGIjujaiF+UFHKDvpFu3yiEpAHdWVMTuAdvZtRW7i9DSSmypKYWU+SPvoTbhIMJA8laicum/ftv3eemaS55bMMlJkuqV5Y+6lEog9Mnu0pBzPPNyx3gzv3d1CAudcsdwM0w5XbtPMw7aMw7aQpNeaOblnrkGP97UDh1QynyGkbPdX7v31qM0KzR1xE7eetrPdX7v30Dmda1kRv56AVZthljfrmtApeXojN2TpQKHca1E8IccRaoClJccK15UpbjMTBJ6RAAAB66lVFUiAI6zO2nV260zxGwQ+2pDzLbic0pSvUabK7jqdq6dK8Jzl5zZ8xvYYg28htxBMOJC0g6GCJ1Bau2lH/TR5/emt2EZQlISlKAkAAfmxoAANAkCk7jpo8/vTWOWbc9Ak864hRyozg67wR7DpTZTiyZ5Fe5P5Vf3Cnrq1icgk5oPkjyjrim7x5xGY7/AD0dfZ59qsgw3duAQGD51k+0itvDnfmD9r+FapMfnkwAdXhqRvOlOFXf1Ov9INh1+Tf0VLPYQ3CPhFcWzJdbsHbhQUkcm2VFRB3MJQTA8lU65408QShRHB+8EAmVB3KI6z+K2G9dLRdEmAlJ8jg9MClkLVpKYmZ127PLUHie+ulOuOOrjM4pS1RtmUSTp5TUlg3QP1j7hSXChAF7dgAAB94ADYAOKgUrg3QP1j7hQQ1FFFB6V4g/6JH7d33Jq5+E3GoyAx1hKIUQdwC7MdYB7apnEIJwkD/vu+5NYHGACJ8EQN9DdKBEdRGTQ16eh+F6vX34c3P3yf7S2R0e2mBmiY1gQPRJ95qMxXD0PsltwOFOYGGyAqQVR0tKccH73lrdp3KUZ20qykzlkbZjE+WnDIMGI8+25rj+bp8/axYqY4I2sg8ndDIUrEZBJGsSkAkdo22q5W72YHmqT3KifLoTWqWxpoj0e6lAlI2A9la6nW59TO+7gZYlsaerXFMcSIg04vEghQVOUggwSDB0Oo1G+4rkFeU7qA5UCqxXM8ogdWz86CBzuUnbc9Z1qSw5jIkDMVEmSSpZ10GnKKUQIA0neT11QtdJWcuRwo3nmZgdRv2aT6e6kUtvHZ46fKZ392vkp+D99ZqBvbNOAnO4Fjq5gEa7yDrpFOKQW+QYyKPeIj31ty3OjKryxp8fZQKmmbllJ0JHkJp5RQMPAD8pX2jR4AflK+0af0g88QdEk+SNPSR7KBsuwVBhRnqlR3pubN7uOg/SLGsa6ZT199PRcK+QofY0/vUqHDQN27Ig6kkd5PurdZUgkpTmmOuNqWS4a2UDO8a+nSgaeFOfND7X8KPCnPmh9r+FOcivleys5FfK9lA18Kc+aH2v4UeFO/ND7X8KdBCvleylKCNuMQcSJ5Ibx0v4Uow8VkEpCY753I+FbYr0POKLWNNZ81AlesvgksqSJ3Ch16a6VoGH9ypE/UFSDh/rRv7q0zj5wf3f9/8A7QMuQf8AlI+wKPB3+1H2BT4a7L9EUqKCicYuPXmH2KrlstFYW2mCjm84wdBBrkT3HfiqkkAsJJBAUlrVPeMxInyg11Pj8/ohf7Vn/FXmKg2dcKiVKJUokkkmSSdSSTual8G6B+sfcKhqmcG6B+sfcKCGooooPTH/AA/j/lI/bu/5a6TyY7K5txAKAwkSQPx7u/7tdJSsHYg0BlApnycpIIMGQYJB3PWNR5qemm7ao9vvoGzFihBlIcnvdcUPQokU48x9NKKcnq9taKEmdftmOzareVvqI/ERodD6ae4m5lbWrLmyoUqO3KCQPZTS9VCSNevdRPvqVUiaS+RyZHGE4QlRRZCQNCXZHcQAauvAjGDdW/KlCEQ4tPMnKqI5wza6zVi5FPZWQ2BXt6/4nodTjnDpdt9936MyVkfGtq1Hl7fPW1eFpB8Kbg+A3ikylSWngCDBBCTqCNQac8H3ZtLVSjKlMsySdVKKASZO5NMOE/8AML79m/8A4aXwT+Z2P7O3/wAAr23jPgf1fRPmmqKS5U58vVln20i0o5XTJ0K49FeTtU8pFe9bW5lKfIK1XvU+YQcdjQVFpvnmloDxQttaggOJSUltSiAgKSSQpKlHLmEQSkQQSQ9vGZkEkAwZG+mv3Ui1YpIyGVJJBMnrBBGo21ANenhOE4+fv7/VjzqTTvW6wOsT2eitBvSpnqrytmodb+Sr1a/hQHGvkq9Wv4Upmd+Sj7at/s1nM78lH2z/AKfJQDdykkAZvsKA9JEUvSbRX+cEjyKJ94FKUDPFOgPrCsWnVW2JCUjyitrZvSgWXPVE99aEudiPSfhWzqQQZTm307e7Wm3Jp+YP9zr3/OoFyXOxPpPwpVMxrvSSLZGhyAejSlqDnPH5/RC/2rP+KvMVenePz+iF/tWf8VeYqAqZwboH6x9wqGqZwboH6x9woIaiiig6hxY8ZzFhbLtbq3U63nLiCgIJBUACkpWQNxIM9Zq6s8eeGJJKbS4STvDbInywvXevPVFB6K/l7w/9Xuvstf66aO8eFgTIZvB3AN/664BRQd8/ltsPm730N/66P5bbD5u99Df+uuB0UHe2eN2zecbaS3dgrWlAzcnEqIAmF7a12ivFeAOpTdW6lEBKXmiSdgAsEk90V7LeD2aUFvLGykqmddZBiNuqgc0UjbByPxhST/VBAjzk0tQYHxpIJOeZ0yxGu8+ilRWasoh8asFu2l00iMziHQmZAlSYE6aeilcPslNsWzZIzNoaSqJiUJAMeipOiunxuXb2/Ld+hhDk/wAZm6sse2tUNHK4O0q7eunNFY7qNGUwlI7AKQuHCDohSpnUFOkR8ojeersp1WCKmhml0ndtQ8pRA9BpWl8o7KMo7KgRTvSpTNZigUDK5UhEZ3yiZjMtIn071q1iNuP+pQfK6iqBxu8Xl1ibtu5buMpDaFpUHVLGpIIjKlU1VjxRYjr+KwnXvuNOvSB2/DbSg7Z+Fbf59r1ifjTll5KxmSoKHakgj0iuB3PEziS0KTlwxM/nJU+FJ1BgHLHVGoOhNdR4ruC72HWIt3lNqXyi1y2VFMKiBKgD1dlBZMQ6I8opS32qmcc+KLt8LdcbdLTpW0lCkqhRJWCQCOvKFeYGvPI4fYp+v3PrVUHr4VzfhxaY8q9mxWoWuROiFsJOeDP5UE7xXCvH/FfpC59aqjx/xX6QufWqoOuqsOEukLuO/wDH2e0Hbmdse2pzi/tMdTduHEFk23JqyBS2VELzIyzyQBnLm12rg3j/AIr9IXPrVUeP+K/SFz61VB3fj+WBhKgSBLrIHeZJgdugJ81eY6k8Y4QXd1l8JuXXgnohxaiEk7kA6A99RlAVM4N0D9Y+4VDVM4N0D9Y+4UENRRRQFFFFAUUUUBRRRQFT1lwzxFpCW2724ShIASkOqhIGgAE6AdlFFAt4/Yr9IXPrVUeP2K/SFz61VZooMeP2K/SFz61VHj9iv0hc+tVWaKDHj9iv0hc+tVR4/Yr9IXPrVVmigx4/Yr9IXPrVUeP2K/SFz61VWaKDHj9iv0hc+tVR4/Yr9IXPrVVmigx4/Yr9IXPrVUeP2K/SFz61VWaKDHj9iv0hc+tVR4/Yr9IXPrVVmigx4/Yr9IXPrVUeP2K/SFz61VWaKDHj9iv0hc+tVR4/Yr9IXPrVVmigjMXx66usvhFw69lnLyi1KCZ3gHQVG0UUBRRRQFFFFAUUUUBUzg3QP1j7hRRQf/9k=',
    imageHint: 'growth chart'
  },
  {
    company: 'Shane Snow - Author/Journalist',
    results: '45.5% Open Rate, Double Industry Average',
    insights: 'Personalization is critical. High-level executives open emails but only respond when they see personal relevance answering "why me?".',
    imageUrl: 'https://picsum.photos/seed/personalization/600/400',
    imageHint: 'executive meeting'
  },
  {
    company: 'Jake Jorgovan - Creative Strategist',
    results: '$12,030 Generated from Dream Clients',
    insights: 'A research-heavy, personalized approach identifying specific prospect problems dramatically outperforms a high-volume strategy.',
    imageUrl: 'https://i.imgur.com/gNUKxI3.png',
    imageHint: 'focused work'
  },
  {
    company: 'LeadFuze - Lead Generation Software',
    results: 'Scaled from $0 to $30k/month in 12 months',
    insights: 'Automation combined with valuable content in follow-ups creates scalable and predictable revenue-generating systems.',
    imageUrl: 'https://i.imgur.com/8z8pQ8q.png',
    imageHint: 'lead generation form'
  },
  {
    company: 'Crazy Eye Marketing - Mobile App Client',
    results: 'Nearly 10% Reply Rate Across All Emails',
    insights: 'Each follow-up is equally valuable. There are no diminishing returns on well-crafted, persistent outreach.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrh5Bot8seZf0-3IRYF4Zj1uhKixuXJDta2A&s',
    imageHint: 'consistent results'
  },
   {
    company: 'Marco Massaro - Web Consultancy',
    results: '$15,000 project from a single cold email campaign',
    insights: 'Hyper-specific targeting of ideal clients combined with a direct, attention-grabbing (though improvable) email yields high response rates.',
    imageUrl: 'https://picsum.photos/seed/targeting/600/400',
    imageHint: 'marketing target'
  },
];

export function CaseStudies() {
  return (
    <section id="results" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Proven Results: What Cold Outreach and High-Quality Lead Generation Can Actually Achieve
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            The pattern across all success stories: Response rates between 1.7% - 13.4% are achievable, follow-up is where the real results happen, and personalization outperforms generic messaging.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col animate-in fade-in-0 slide-in-from-bottom-10 duration-500 overflow-hidden group h-full">
              <div className="relative h-56 w-full">
                <Image
                    src={study.imageUrl}
                    alt={study.insights}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={study.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle>{study.company}</CardTitle>
                <CardDescription className="text-primary font-bold text-lg">{study.results}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Key Insight:</strong> {study.insights}
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <a href="https://www.levelingup.com/casestudies/6-cold-email-case-studies-great-reply-rates/" target="_blank" rel="noopener noreferrer">See More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-16 mx-auto max-w-4xl text-center">
          <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">The Blueprint for Success</h3>
          <p className="mt-4 text-muted-foreground md:text-lg">
            There are many steps involved in a successful cold email campaign, and for most people, it can be pretty time-consuming. You have to identify who you’re targeting, find their contact information, and then craft a personalized message with a compelling call to action. To make things more efficient, you can use software tools to automate your processes and track your data. By understanding the templates and numbers from these successful campaigns, you can create a system that is large enough to change the course of your business.
          </p>
        </div>
      </div>
    </section>
  );
}
